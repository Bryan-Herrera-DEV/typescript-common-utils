// @typescript-eslint/no-explicit-any - disable explicit any
import { ClassInstance } from "./";
import { expectType } from "tsd";

class MiClase {
  constructor(public mensaje: string) {}
}

describe("[Test] ClassInstance", () => {
  it("returns a class instance", () => {
    const crearInstancia = <T extends new (...args: any[]) => any>(Clase: T, args: ConstructorParameters<T>): ClassInstance<T> => {
      return new Clase(...args) as ClassInstance<T>;
    };

    const instancia = crearInstancia(MiClase, ["Hola Mundo"]);

    expectType<MiClase>(instancia);
    expect(instancia).toBeInstanceOf(MiClase);
    expect(instancia.mensaje).toBe("Hola Mundo");
  });
});
