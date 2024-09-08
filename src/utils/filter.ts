import { OompaLoompa } from "../declarations";

const getMergedFields = (oompaLoompa: OompaLoompa) =>
  `${oompaLoompa.first_name} ${oompaLoompa.last_name} ${oompaLoompa.profession}`;

export const getFilteredList = (
  loompas: OompaLoompa[],
  searchText: string
): OompaLoompa[] =>
  loompas.length
    ? loompas.filter((loompa: OompaLoompa) =>
        getMergedFields(loompa).includes(searchText)
      )
    : loompas;
