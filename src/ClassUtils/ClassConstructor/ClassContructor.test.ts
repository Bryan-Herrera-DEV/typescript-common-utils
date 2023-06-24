import { ClassConstructor } from "./";
import { Usuario } from "../../../test/utils/UsuarioClass";

describe("[Test] ClassConstructor", () => {
  it("Create User Instance", () => {
    function instanciaCreador<T>(Cls: ClassConstructor<T>, ...args: unknown[]): T {
      return new Cls(...args);
    }

    const usuario = instanciaCreador(Usuario, "John Doe", 30);

    expect(usuario).toBeInstanceOf(Usuario);
    expect(usuario.nombre).toEqual("John Doe");
    expect(usuario.edad).toEqual(30);
  });
});
