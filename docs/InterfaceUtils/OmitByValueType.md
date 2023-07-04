# OmitByValueType
`OmitByValueType` is a utility type that gets all keys of a `T` object whose values do not correspond to the `U` type. It is useful when you want to work with keys of an object that have a specific value type and exclude those that do not.

## Definition
```ts
export type OmitByValueType<T, U> = {
  [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];
```

## Parameters
- `T`: This type parameter represents the object you are interested in.
- `U`: This type parameter represents the type of value you are looking to exclude within the `T` object.

## Return Type
- `OmitByValueType<T, U>`: The return type is a union type of all keys in `T` whose values do not correspond to type `U`. If all keys have a value of type `U`, the return type will be `never`.

## Example
For use with a specific object and value type:
```ts
type MyType = { a: number; b: string; c: number; };
type NonNumberKeys = OmitByValueType<MyType, number>; // 'b'
```

## Example Implementation
```ts
import { OmitByValueType } from "typescript-dev-utils";
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
        key => typeof obj[key] !== 'string'
      ) as Array<OmitByValueType<T, string>>;
      return keys;
    };

    const miObjeto: IMiInterfaz = { nombre: "Juan", edad: 30, direccion: "Calle Falsa 123", activo: true };

    const resultado = getNonStringKeys(miObjeto);

    // Type assertion and expectation
    expectType<Array<OmitByValueType<IMiInterfaz, string>>>(resultado);
    expect(resultado).toEqual(["edad", "activo"]);
  });
});
```

## Notes
`OmitByValueType` can be useful for working with object keys that have a specific value type. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.