import { UnionToIntersection } from ".";
import { expectType, expectError } from "tsd";

describe("[Test] UnionToIntersection", () => {
  it("converts a union type to an intersection type", () => {
    type MiUnion = { nombre: string } | { apellido: string };

    const mergeObjects = <T extends object[]>(...objs: T): UnionToIntersection<T[number]> => {
      return objs.reduce((acc, obj) => ({ ...acc, ...obj }), {} as any);
    };

    const miObjeto1 = { nombre: "Juan" };
    const miObjeto2 = { apellido: "Perez" };
    const resultado = mergeObjects(miObjeto1, miObjeto2);

    // Esperamos que el resultado sea de tipo UnionToIntersection<MiUnion>
    expectType<UnionToIntersection<MiUnion>>(resultado);
    expect(resultado).toEqual({ nombre: "Juan", apellido: "Perez" });
  });
});
