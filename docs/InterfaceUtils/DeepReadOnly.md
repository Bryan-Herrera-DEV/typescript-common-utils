# DeepReadonly
`DeepReadonly` is a utility type in TypeScript that takes a `T` type and makes all of its properties (and the properties of its properties, etc.) read-only.

## Definition
```ts
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
```
## Parameters
- `T`: This type parameter represents any type of object you wish to convert to a read-only version.

## Return Type
- `DeepReadonly<T>`: The return type is a "deep" read-only version of `T`. Each property of `T` (and subproperties, etc.) will be read-only, which means that you cannot assign new values to them after creation.

## Examples
For use with a single object:
```ts
type MyReadonlyObj = DeepReadonly<{ prop: number, subObj: { prop2: string } }>;
const obj: MyReadonlyObj = { prop: 1, subObj: { prop2: 'test' } };
// This will give an error, since 'prop' is read-only.
obj.prop = 2;
```

## Example Implementation
```ts
import { DeepReadonly } from "typescript-dev-utils";
import { ExampleObjectOne } from "@/test/utils/ExampleObjectData";

// Transforming ExampleObjectOne to a read-only version using DeepReadonly
function transformToReadonly(): DeepReadonly<typeof ExampleObjectOne> {
  return ExampleObjectOne;
}

// Obtaining the read-only data
const readonlyData = transformToReadonly();

// Accessing properties (read-only)
console.log(readonlyData.user.name); // Returns: "John Doe"
console.log(readonlyData.user.details.age); // Returns: 30
console.log(readonlyData.user.details.address.street); // Returns: "street 123"
```

## Notes
`DeepReadonly` can be very useful for working with complex object types and ensuring immutability. It recursively makes all properties of the object and its sub-properties read-only. However, it's important to be aware that using `DeepReadonly` extensively on large objects or deeply nested structures can have a performance impact.