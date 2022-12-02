import { Person, SelectablePerson } from "./person.interface";


export interface State{
  person: PersonState;
}

export interface PersonState{
  data: SelectablePerson[];
  selectedCount: number;
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  errorMessage?: string;
}