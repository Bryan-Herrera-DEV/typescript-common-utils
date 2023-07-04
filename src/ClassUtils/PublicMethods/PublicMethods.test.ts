import { PublicMethods } from ".";
import { expectType } from "tsd";

class MiClase {
  public nombre: string = "Juan";
  public apellido: string = "Perez";

  public saludar() {
    return `Hola, mi nombre es ${this.nombre} ${this.apellido}`;
  }
}

describe("[Test] PublicMethods", () => {
  it("returns the public methods of a class", () => {
    const obtenerMetodosPublicos = <T extends { [key: string]: any }>(obj: T): Array<PublicMethods<T>> => {
      const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(
        key => typeof obj[key] === "function" && key !== "constructor"
      ) as Array<PublicMethods<T>>;
      return keys;
    };

    const miObjeto = new MiClase();

    const resultado = obtenerMetodosPublicos(miObjeto);

    expectType<Array<PublicMethods<MiClase>>>(resultado);
    expect(resultado).toEqual(["saludar"]);
  });
});
