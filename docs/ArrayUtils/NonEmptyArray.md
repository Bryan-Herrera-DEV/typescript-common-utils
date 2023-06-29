# NonEmptyArray
`NonEmptyArray` is a utility type that represents an array containing at least one element.

## Definition

```ts
export type NonEmptyArray<T> = [T, ...T[]];
```

## Parameters
- `T`: This type parameter represents the type of elements that the array can contain.

## Return Value
- `NonEmptyArray<T>`: The return type is an array of `T` containing at least one element.

## Examples
```ts
// For use with a specific type:
type MyNonEmptyArray = NonEmptyArray<number>;
const validArray: MyNonEmptyArray = [1]; // This is valid.
const invalidArray: MyNonEmptyArray = []; // This will give a compilation error.

// For use with type 'any':
type AnyNonEmptyArray = NonEmptyArray<any>;
const anyValidArray: AnyNonEmptyArray = [1, 'string', {}, []]; // This is valid.
const anyInvalidArray: AnyNonEmptyArray = []; // This will give a compilation error.
```
## Example Implementation

```ts
import { NonEmptyArray } from "./";

// Implementation of the NonEmptyArray type
function isNonEmptyArray<T>(arr: NonEmptyArray<T>) {
  return arr[0];
}
const arr = [1, 2, 3, 4, 5];

const first = isNonEmptyArray([arr[0]]);
console.log(first) // Returns: 1
console.log(arr.length) // Returns: 5

```

## Note

`NonEmptyArray` can be useful for guaranteeing the existence of at least one element in an array, but it cannot guarantee "non-emptiness" at runtime. If it is necessary to verify that an array is not empty at runtime, you will need to perform that check explicitly in your code.
