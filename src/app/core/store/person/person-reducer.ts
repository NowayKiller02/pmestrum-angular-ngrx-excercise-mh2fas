/*
 create & export personReducer (using createReducer creator method)
 create INITIAL_STATE
 add 2 reducers for load & loadSuccess
 optional: add extra reducer for loadFail
 */

import { createReducer, on } from "@ngrx/store";
import { PersonState } from "../../interfaces/state.interface";
import { personLoadedAction, personLoadSuccess } from "./person-actions"

const INITIAL_STATE:PersonState = {
  data: [],
  loading: false,
  loaded: false,
  failed: false,
};

 export const personReducer = createReducer(
   INITIAL_STATE,
    on(personLoadedAction,(state)=>{
    return{
      ...state,
      loading: true,
    }
  }),
  on(personLoadSuccess,(state, payload)=>{
    return{
      ...state,
      loading: false,
      loaded: true,
      data: payload.data
    }
  })
 );