# UnboxArray
`UnboxArray` is a utility type that takes an array type and returns the type of the elements contained in that array. It is useful when you want to work with the type of elements in an array, rather than the array itself.

## Definition
```ts
export type UnboxArray<T extends any[]> = T extends (infer U)[] ? U : T;
```

## Parameters
- `T`: This type parameter represents the type of the array you want to unpack.

## Return Type
- `UnboxArray<T>`: The return type is the type of the elements contained in the array `T`. If `T` is not an array type, the return type will be `T` unchanged.

## Examples
For use with a specific array type:
```ts
type MyArrayType = number[];
type MyElementType = UnboxArray<MyArrayType>; // number.

// If you use it with a non-array type, you will get the same type:
type MyNonArrayType = string;
type MyNonArrayElementType = UnboxArray<MyNonArrayType>; // string
```

## Example Implementation
```ts
import { UnboxArray } from "typescript-dev-utils";
import { expectType } from "tsd";

// Function to get the type of the first element in an array
const getElemento = <T extends any[]>(arr: T): UnboxArray<T> => {
  return arr[0] as UnboxArray<T>;
};

// Example usage
const miArray = ["Hola", "Mundo"];

const resultado = getElemento(miArray);

// Type assertion and expectation
expectType<UnboxArray<typeof miArray>>(resultado);
expect(resultado).toBe("Hola");
```

## Notes
`UnboxArray` can be useful for working with array element types. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.