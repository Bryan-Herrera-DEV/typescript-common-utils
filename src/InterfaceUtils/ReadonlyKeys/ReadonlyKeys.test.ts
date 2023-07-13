import { ReadonlyKeys } from ".";
import { expectType } from "tsd";
type MyObject = {
  readonly myReadonlyProperty: number;
  myWritableProperty: string;
};

describe("[Test] ReadonlyKeys", () => {
  it("returns the keys of readonly properties", () => {
    type MyReadonlyKeys = ReadonlyKeys<MyObject>;

    expectType<"myReadonlyProperty">(null as MyReadonlyKeys);
  });
});
