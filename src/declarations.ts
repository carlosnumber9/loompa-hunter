type Gender = "M" | "F";

interface Favourites {
  color: string;
  food: string;
  random_string: string;
  song: string;
}

export interface OompaLoompa {
  id: string;
  first_name: string;
  last_name: string;
  favorite: Favourites;
  gender: Gender;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: string;
  height: number;
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

export type LoompaDetails = { [key: string]: OompaLoompa };
