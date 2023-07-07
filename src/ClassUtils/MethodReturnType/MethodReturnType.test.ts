import { MethodReturnType } from ".";
import { expectType } from "tsd";

class MyClass {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

describe("[Test] MethodReturnType", () => {
  it("returns the return type of a method", () => {
    const myInstance = new MyClass();

    const result = myInstance.greet("John");

    // Esperamos que el tipo del resultado sea el tipo de retorno del método greet
    expectType<MethodReturnType<MyClass, "greet">>(result);
    expect(result).toBe("Hello, John!");
  });
});
