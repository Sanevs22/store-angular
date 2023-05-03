import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { RequestService } from 'src/app/services/request.service';

import { Observable, of, Subject } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  map,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

class СountryComboboxItem {
  constructor(readonly сountry: any) {}

  toString(): string {
    return this.сountry.translations.rus.common;
  }
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.less'],
  providers: [RequestService, TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent {
  @Output()
  add = new EventEmitter<object>();
  readonly search$ = new Subject<string>();
  readonly destroy$ = new Subject<void>();

  readonly items$: Observable<СountryComboboxItem[] | null> = this.search$.pipe(
    filter((value) => value !== null),
    switchMap((search) =>
      this.serverRequest(search).pipe(
        debounceTime(500),
        startWith(null),
        catchError(() => of(null))
      )
    )
  );

  form = new FormGroup({
    input1: new FormControl(null, Validators.required),
  });

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((changes) => {
        if (typeof changes.input1 !== 'string') {
          console.log(changes?.input1);
          this.add.emit({
            сountry: changes?.input1,
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery!);
  }

  private serverRequest(search: string): Observable<СountryComboboxItem[]> {
    return this.requestService
      .search(search)
      .pipe(
        map((positions) => positions.map((p) => new СountryComboboxItem(p)))
      );
  }
}
