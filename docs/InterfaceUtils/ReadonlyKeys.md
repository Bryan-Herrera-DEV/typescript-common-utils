# ReadonlyKeys
`ReadonlyKeys` is a utility type in TypeScript that retrieves all keys of an object `T` that represent readonly properties. It's helpful when you want to work with keys of an object representing properties that cannot be altered (are readonly).

## Definition
```typescript
export type ReadonlyKeys<T> = { [P in keyof T]: T extends ReadonlyArray<any> ? P : never }[keyof T];
```

## Type Parameters
- `T`: This type parameter represents the object from which you're interested in obtaining the keys of readonly properties.

## Return Value
- `ReadonlyKeys<T>`: The return type is a union type of all keys in `T` that correspond to readonly properties. If there are no keys that are readonly properties, the return type will be 'never'.

## Example
To use it with a specific object:
```typescript
type MyObject = {
  readonly myReadonlyProperty: number;
  myWritableProperty: string;
};

type MyReadonlyKeys = ReadonlyKeys<MyObject>; // "myReadonlyProperty"
```

## Example Implementation
```typescript
import { ReadonlyKeys } from "typescript-dev-utils";

type MyObject = {
  readonly myReadonlyProperty: number;
  myWritableProperty: string;
};

// Retrieve the keys of readonly properties
type MyReadonlyKeys = ReadonlyKeys<MyObject>;

// Type assertion and expectation
expect<"myReadonlyProperty">(null as MyReadonlyKeys);
```

## Note
`ReadonlyKeys` can be useful when working with keys of objects representing readonly properties. However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.