import { OompaLoompa } from "../../types";

export const getFilteredList = (
  loompas: OompaLoompa[],
  searchText: string
): OompaLoompa[] =>
  loompas.filter(
    (loompa: OompaLoompa) =>
      loompa.first_name.includes(searchText) ||
      loompa.last_name.includes(searchText) ||
      loompa.profession.includes(searchText)
  );
