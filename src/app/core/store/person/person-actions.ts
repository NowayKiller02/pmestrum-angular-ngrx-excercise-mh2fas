// create personsLoadAction and personsLoadSuccessAction
// optional: create personsLoadFailAction

import { createAction, props } from '@ngrx/store';
import { Persons } from '../../interfaces/person.interface';

export const personLoadedAction = createAction('PERSON_LOAD');
export const personLoadSuccess = createAction(
  'PERSON_LOAD_SUCCESS',
  props<Persons>()
);
