# OverrideInterface
`OverrideInterface` is a utility type that takes two types `T` and `U` and combines their properties. However, if `T` and `U` have properties with the same keys, the properties of `U` overwrite those of `T`.

## Definition
```ts
export type OverrideInterface<T, U> = Omit<T, keyof U> & U;
```

## Parameters
- `T`: This type parameter represents the first type you want to combine.
- `U`: This type parameter represents the second type, whose properties will overwrite those of `T` if they have the same keys.

## Return Type
- `OverrideInterface<T, U>`: The return type is a combination of `T` and `U`, but with the properties of `U` overwriting those of `T` if they have the same keys.

## Examples
For use with two specific interface types:
```ts
interface MyFirstType { a: number; b: string; }
interface MySecondType { b: number; c: boolean; }
type MyOverrideType = OverrideInterface<MyFirstType, MySecondType>;
// The resulting type is { a: number; b: number; c: boolean; }
```

## Example Implementation
```ts
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

// Function to override properties from the source interface
const getDatos = <T, U>(fuente: T, override: U): OverrideInterface<T, U> => {
  return { ...fuente, ...override };
};

// Example usage
const fuente: IFuente = { nombre: "Juan", edad: 30, direccion: "Calle Falsa 123" };
const override: IOverride = { nombre: "Pedro", ciudad: "Madrid" };

const resultado = getDatos(fuente, override);

// Type assertion and expectation
expectType<OverrideInterface<IFuente, IOverride>>(resultado);
expect(resultado).toEqual({ nombre: "Pedro", edad: 30, direccion: "Calle Falsa 123", ciudad: "Madrid" });
```

## Notes
`OverrideInterface` can be useful for modifying existing types or for combining types with possibly matching properties. Note, however, that TypeScript is a compile-time type system and cannot guarantee run-time consistency.