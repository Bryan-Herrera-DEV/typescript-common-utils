import { UnboxArray } from ".";
import { expectType } from "tsd";

describe("[Test] UnboxArray", () => {
  it("returns the type of elements in an array", () => {
    const getElemento = <T extends any[]>(arr: T): UnboxArray<T> => {
      return arr[0] as UnboxArray<T>;
    };

    const miArray = ["Hola", "Mundo"];

    const resultado = getElemento(miArray);

    // Esperamos que el resultado sea de tipo UnboxArray<typeof miArray>
    expectType<UnboxArray<typeof miArray>>(resultado);
    expect(resultado).toBe("Hola");
  });
});
