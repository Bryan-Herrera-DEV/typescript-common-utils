# AsReadonlyArray
`AsReadonlyArray` is a utility type that transforms an array type `T` into its corresponding readonly array type. This can be useful when you want to ensure that no mutations can be performed on the array.

## Definition
```typescript
export type AsReadonlyArray<T extends unknown[]> = readonly [...T];
```

## Type Parameters
- `T`: This type parameter represents the array type that you want to convert into a readonly array type.

## Return Value
- `AsReadonlyArray<T>`: The return type is a readonly array type that corresponds to `T`. Any attempt to perform array mutations (like push or pop) will result in a compile-time error.

## Example
To use it with a specific array type:
```typescript
type MyArray = number[];

type MyReadonlyArray = AsReadonlyArray<MyArray>; // readonly number[]
```

## Example Implementation
```typescript
import { AsReadonlyArray } from "typescript-dev-utils";

type MyTuple = [string, number, boolean];

// Creating a readonly tuple using AsReadonlyArray
const tuple: AsReadonlyArray<MyTuple> = ["string", 123, true];
// You can access the elements of the tuple but cannot modify it
console.log(tuple[0]); // Returns: "string"
console.log(tuple[1]); // Returns: 123
console.log(tuple[2]); // Returns: true
```

## Note
`AsReadonlyArray` can be useful when you want to protect an array from being mutated. However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.