# KeysOfType
`KeysOfType` is a utility type that gets all the keys of a `T` object whose values correspond to the `U` type. It is useful when you want to work with keys of an object that have a specific value type.

## Definition
```ts
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
```

## Parameters
- `T`: This type parameter represents the object you are interested in.
- `U`: This type parameter represents the type of value you are looking for within the `T` object.

## Return Type
- `KeysOfType<T, U>`: The return type is a union type of all keys in `T` whose values correspond to type `U`. If there are no keys having a value of type `U`, the return type will be `never`.

## Examples
For use with a specific object and value type:
```ts
type MyType = { a: number; b: string; c: number; };
type NumberKeys = KeysOfType<MyType, number>; // 'a' | 'c'
```

## Example Implementation
```ts
import { KeysOfType } from "typescript-dev-utils";
import { expectType } from "tsd";

interface IMiInterfaz {
  nombre: string;
  edad: number;
  direccion: string;
  activo: boolean;
}

// Function to get keys of type string from an object
const getKeysOfString = <T extends object>(obj: T): Array<KeysOfType<T, string>> => {
  const keys = (Object.keys(obj) as Array<keyof T>).filter(
    key => typeof obj[key] === 'string'
  ) as Array<KeysOfType<T, string>>;
  return keys;
};

// Example usage
const miObjeto: IMiInterfaz = { nombre: "Juan", edad: 30, direccion: "Calle Falsa 123", activo: true };

const resultado = getKeysOfString(miObjeto);

// Type assertion and expectation
expectType<Array<KeysOfType<IMiInterfaz, string>>>(resultado);
expect(resultado).toEqual(["nombre", "direccion"]);
```

## Notes
`KeysOfType` can be useful for working with object keys that have a specific type value. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at run-time.