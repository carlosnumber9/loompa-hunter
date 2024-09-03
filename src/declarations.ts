type Gender = "M" | "F";

interface Favourites {
  random_string: string;
}

export interface OompaLoompa {
  id: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  image: string;
  profession: string;
}

export interface OompaLoompaDetail extends OompaLoompa {
  favorite: Favourites;
}

export enum LoadingState {
  OK = "OK",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export const GENDER = {
  F: "Woman",
  M: "Man",
};

export interface LoompaDetail {
  lastRequestTime: number;
  data: OompaLoompaDetail;
}

export type LoompaDetails = {
  [key: string]: LoompaDetail;
};
