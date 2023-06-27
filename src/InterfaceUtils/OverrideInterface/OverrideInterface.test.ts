import { OverrideInterface } from ".";
import { expectType } from "tsd";

interface IFuente {
  nombre: string;
  edad: number;
  direccion: string;
}

interface IOverride {
  nombre: string;
  ciudad: string;
}

describe("[Test] OverrideInterface", () => {
  it("overrides properties from the source interface", () => {
    const getDatos = <T, U>(fuente: T, override: U): OverrideInterface<T, U> => {
      return { ...fuente, ...override };
    };

    const fuente: IFuente = { nombre: "Juan", edad: 30, direccion: "Calle Falsa 123" };
    const override: IOverride = { nombre: "Pedro", ciudad: "Madrid" };

    const resultado = getDatos(fuente, override);

    expectType<OverrideInterface<IFuente, IOverride>>(resultado);
    expect(resultado).toEqual({ nombre: "Pedro", edad: 30, direccion: "Calle Falsa 123", ciudad: "Madrid" });
  });
});
