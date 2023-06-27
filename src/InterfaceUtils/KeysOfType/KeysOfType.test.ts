import { KeysOfType } from ".";
import { expectType } from "tsd";

interface IMiInterfaz {
  nombre: string;
  edad: number;
  direccion: string;
  activo: boolean;
}

describe("[Test] KeysOfType", () => {
  it("returns keys of a specific type", () => {
    const getKeysOfString = <T extends object>(obj: T): Array<KeysOfType<T, string>> => {
      const keys = (Object.keys(obj) as Array<keyof T>).filter(
        key => typeof obj[key] === 'string'
      ) as Array<KeysOfType<T, string>>;
      return keys;
    };

    const miObjeto: IMiInterfaz = { nombre: "Juan", edad: 30, direccion: "Calle Falsa 123", activo: true };

    const resultado = getKeysOfString(miObjeto);

    expectType<Array<KeysOfType<IMiInterfaz, string>>>(resultado);
    expect(resultado).toEqual(["nombre", "direccion"]);
  });
});
