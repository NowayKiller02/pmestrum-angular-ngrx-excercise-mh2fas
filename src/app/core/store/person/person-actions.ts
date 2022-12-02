// create personsLoadAction and personsLoadSuccessAction
// optional: create personsLoadFailAction

import { createAction, props } from '@ngrx/store';
import { Person, Persons, SelectablePerson } from '../../interfaces/person.interface';

export const personLoadedAction = createAction('PERSON_LOAD');
export const personLoadSuccess = createAction(
  'PERSON_LOAD_SUCCESS',
  props<Persons>()
);

export const personSelectAction = createAction('PERSON_SELECT', props<SelectablePerson>());

export const personDeselectAction = createAction('PERSON_DESELECT', props<SelectablePerson>());