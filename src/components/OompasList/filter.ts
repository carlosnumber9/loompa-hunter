import { OompaLoompa } from "../../declarations";

export const getFilteredList = (
  loompas: OompaLoompa[],
  searchText: string
): OompaLoompa[] =>
  searchText.length ? loompas.filter(
    (loompa: OompaLoompa) =>
      loompa.first_name.includes(searchText) ||
      loompa.last_name.includes(searchText) ||
      loompa.profession.includes(searchText)
  ) : loompas;
