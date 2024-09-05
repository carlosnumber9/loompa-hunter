import { test, describe, expect } from "@jest/globals";
import { OompaLoompa } from "../declarations";
import { getFilteredList } from "./filter";

const SEARCH_TEXT = "Marcy";

const cases: [string, OompaLoompa[], string, OompaLoompa[]][] = [
  ["Empty list", [], SEARCH_TEXT, []],
];

describe("Utils", () => {
  describe("Filter", () => {
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
