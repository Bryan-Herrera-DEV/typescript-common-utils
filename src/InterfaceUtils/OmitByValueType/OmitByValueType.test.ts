import { OmitByValueType } from ".";
import { expectType } from "tsd";

interface IMiInterfaz {
  nombre: string;
  edad: number;
  direccion: string;
  activo: boolean;
}

describe("[Test] OmitByValueType", () => {
  it("returns keys not of a specific type", () => {
    const getNonStringKeys = <T extends object>(obj: T): Array<OmitByValueType<T, string>> => {
      const keys = (Object.keys(obj) as Array<keyof T>).filter(
        key => typeof obj[key] !== "string"
      ) as Array<OmitByValueType<T, string>>;
      return keys;
    };

    const miObjeto: IMiInterfaz = { nombre: "Juan", edad: 30, direccion: "Calle Falsa 123", activo: true };

    const resultado = getNonStringKeys(miObjeto);

    // Esperamos que el resultado sea de tipo Array<OmitByValueType<IMiInterfaz, string>>
    expectType<Array<OmitByValueType<IMiInterfaz, string>>>(resultado);
    expect(resultado).toEqual(["edad", "activo"]);
  });
});
