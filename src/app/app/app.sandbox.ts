import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Person, SelectablePerson } from '../core/interfaces/person.interface';
import { State } from '../core/interfaces/state.interface';
import { PersonRestService } from '../core/services/person.rest.service';
import {
  personDeselectAction,
  personLoadedAction,
  personLoadSuccess,
  personSelectAction,
} from '../core/store/person/person-actions';

@Injectable()
export class AppSandbox {
  persons$ = this.store.select((state) => {
    return state.person.data;
  });
  selectedCount$ = this.store.select(state => state.person.selectedCount);

  constructor(
    private store: Store<State>,
    private personRestService: PersonRestService
  ) {}

  loadPersons(): void {
    this.store.dispatch(personLoadedAction());
    this.personRestService
      .getUsers$()
      .pipe(first())
      .subscribe((persons) => {
        this.store.dispatch(personLoadSuccess(persons));
      });
  }

  toggleSelected(person: SelectablePerson) {
    if (person.selected) {
      this.store.dispatch(personDeselectAction(person));
    } else {
      this.store.dispatch(personSelectAction(person));
    }
  }
}
