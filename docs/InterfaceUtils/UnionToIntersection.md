# UnionToIntersection
`UnionToIntersection` is a utility type that takes a union of types and converts them into an intersection of types. It is useful when you have a union of types and need to work with a type that includes all the properties of each type in the union.

## Definition
```ts
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
```

## Parameters
- `U`: This type parameter represents the union of types you want to convert to an intersection.

## Return Type
- `UnionToIntersection<U>`: The return type is an intersection of all types in the union `U`. If `U` is not a union of types, the return type will be `U` unchanged.

## Example
To use with a union of types:
```ts
type MyUnion = { a: number; } | { b: string; };
type MyIntersection = UnionToIntersection<MyUnion>; // { a: number; } & { { b: string; }
```

## Example Implementation
```ts
import { UnionToIntersection } from "typescript-dev-utils";
import { expectType, expectError } from "tsd";

type MiUnion = { nombre: string } | { apellido: string };

const mergeObjects = <T extends object[]>(...objs: T): UnionToIntersection<T[number]> => {
  return objs.reduce((acc, obj) => ({ ...acc, ...obj }), {} as any);
};

const miObjeto1 = { nombre: "Juan" };
const miObjeto2 = { apellido: "Perez" };
const resultado = mergeObjects(miObjeto1, miObjeto2);

// Type assertion and expectation
expectType<UnionToIntersection<MiUnion>>(resultado);
expect(resultado).toEqual({ nombre: "Juan", apellido: "Perez" });
```

## Notes
`UnionToIntersection` can be useful for working with type intersections from type unions. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.