import { NonEmptyArray } from "./";
function esNonEmptyArray<T>(arr: NonEmptyArray<T>) {
  return arr[0];
}
describe("[Test] NonEmptyArray", () => {
  it("returns the first element of a non-empty array", () => {
    const arr = [1, 2, 3, 4, 5];
    if (arr.length > 0) {
      const primer = esNonEmptyArray([arr[0]]);
      expect(primer).toBe(1);

      expect(arr.length).toBeGreaterThan(0);
    }
  });
});
