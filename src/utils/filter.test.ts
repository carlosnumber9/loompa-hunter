import { OompaLoompa } from "../declarations";
import { getFilteredList } from "./filter";
import { OOMPALOOMPAS } from "../mocks";

const SEARCH_TEXT_MATCH = "Jarred";
const SEARCH_TEXT_NO_MATCH = "CArlos";

const cases: [string, OompaLoompa[], string, OompaLoompa[]][] = [
  ["Empty list", [], SEARCH_TEXT_MATCH, []],
  [
    "Standard case with no matches",
    OOMPALOOMPAS as OompaLoompa[],
    SEARCH_TEXT_NO_MATCH,
    [],
  ],
  [
    "Standard case with one match",
    OOMPALOOMPAS as OompaLoompa[],
    SEARCH_TEXT_MATCH,
    [OOMPALOOMPAS[0]],
  ],
];

describe("Utils", () => {
  describe("Filter", () => {
    describe("getFilteredList", () => {
      test.each(cases)(
        "%s",
        (
          _title: string,
          originalList: OompaLoompa[],
          searchText: string,
          expected: OompaLoompa[]
        ) => {
          expect(getFilteredList(originalList, searchText)).toEqual(expected);
        }
      );
    });
  });
});
