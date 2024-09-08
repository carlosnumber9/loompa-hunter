import { lastRequestExpired } from "./date";

const cases: [string, number, boolean][] = [
  ["One day difference", 803599200000, true],
  ["Less than one day difference", 803730645000, false],
  ["Same time", 803685600000, false],
  ["Not a number", NaN, true],
];

interface MockDate extends Date {
  getTime(): number;
}

describe("Utils", () => {
  describe("Date", () => {
    describe("lastRequestExpired", () => {
      beforeEach(() => {
        jest.spyOn(global, "Date").mockImplementation(
          () =>
            ({
              getTime: () => 803685600000, // June 21st 1995
            }) as MockDate
        );
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      test.each(cases)(
        "%s",
        (_title: string, lastRequest: number, expected: boolean) => {
          expect(lastRequestExpired(lastRequest)).toEqual(expected);
        }
      );
    });
  });
});
