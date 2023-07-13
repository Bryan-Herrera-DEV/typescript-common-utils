import { RequireAtLeastOne } from ".";
import { expectType } from "tsd";
interface MyInterface {
  prop1?: number;
  prop2?: string;
  prop3?: boolean;
}

describe("[Test] RequireAtLeastOne", () => {
  it("requires at least one property from the specified keys", () => {
    const obj1: RequireAtLeastOne<MyInterface, "prop1" | "prop2"> = {
      prop1: 123,
    };

    const obj2: RequireAtLeastOne<MyInterface, "prop1" | "prop2"> = {
      prop2: "hello",
    };

    const obj3: RequireAtLeastOne<MyInterface, "prop1" | "prop2"> = {
      prop1: 123,
      prop2: "hello",
    };
    expectType<MyInterface>(obj1);
    expectType<MyInterface>(obj2);
    expectType<MyInterface>(obj3);
  });
});
