import { Person } from "./person.interface";

/*
  create global state containing personState
 */
export interface State{
  person: PersonState;
}

export interface PersonState{
  data: Person[];
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  errorMessage?: string;
}