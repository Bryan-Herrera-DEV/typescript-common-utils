import { AsReadonlyArray } from ".";
import { expectType } from "tsd";

describe("[Test] AsReadonly", () => {
  it("returns a readonly tuple", () => {
    type MyTuple = [string, number, boolean];

    type ReadonlyTuple = AsReadonlyArray<MyTuple>;

    expectType<readonly [string, number, boolean]>({} as ReadonlyTuple);
  });
});
