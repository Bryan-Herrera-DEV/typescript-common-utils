import { NonEmptyArray } from "./";

describe("[Test] NonEmptyArray", () => {
  it("returns the first element of a non-empty array", () => {


    function esNonEmptyArray<T>(arr: NonEmptyArray<T>) {
      return arr[0];
    }

    const arr = [1, 2, 3, 4, 5];
    if (arr.length > 0) {
      const primer = esNonEmptyArray<number>([arr[0]]);
      expect(primer).toBe(1);
    }
  });

  // This test will fail because the array is empty
  // it('Not Acept Invalid Array', () => {
  //   const arr: number[] = [];
  //   const primer = primerElemento(arr); // Error
  // });
});
