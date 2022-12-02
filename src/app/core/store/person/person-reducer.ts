/*
 create & export personReducer (using createReducer creator method)
 create INITIAL_STATE
 add 2 reducers for load & loadSuccess
 optional: add extra reducer for loadFail
 */

import { createReducer, on } from '@ngrx/store';
import { Persons, SelectablePerson } from '../../interfaces/person.interface';
import { PersonState } from '../../interfaces/state.interface';
import {
  personLoadedAction,
  personLoadSuccess,
  personSelectAction,
  personDeselectAction,
} from './person-actions';

const INITIAL_STATE: PersonState = {
  data: [],
  selectedCount:0,
  loading: false,
  loaded: false,
  failed: false,
};

export const personReducer = createReducer(
  INITIAL_STATE,
  on(personLoadedAction, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(personLoadSuccess, (state, payload: Persons) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      data: payload.data.map((person) => {
        return {
          ...person,
          selected: false,
        };
      }),
    };
  }),
  on(personSelectAction, (state, personToSelect: SelectablePerson) => {
    return {
      ...state,
      data: state.data.map((person) => {
        if (person.id === personToSelect.id) {
          return {
            ...person,
            selected: true,
          };
        }
        return person;
      }),
      selectedCount: state.selectedCount +1,
    };
  }),
  on(personDeselectAction, (state, personToSelect: SelectablePerson) => {
    return {
      ...state,
      data: state.data.map((person) => {
        if (person.id === personToSelect.id) {
          return {
            ...person,
            selected: false,
          };
        }
        return person;
      }),
      selectedCount: state.selectedCount -1,
    };
  })
);
