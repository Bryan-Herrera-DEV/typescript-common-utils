# RequireAtLeastOne
`RequireAtLeastOne` is a utility type that enforces that at least one of the properties of an object `T` should be present. The type parameter `Keys` represents the keys that you're interested in. If it's not explicitly provided, it defaults to `keyof T`, meaning it will consider all keys in `T`.

## Definition
```typescript
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]
```

## Type Parameters
- `T`: This type parameter represents the object that you're interested in.
- `Keys`: This optional type parameter represents the keys of `T` that should have at least one defined. If not specified, it defaults to `keyof T`, considering all keys in `T`.

## Return Value
- `RequireAtLeastOne<T, Keys>`: The return type is an object type that enforces that at least one of the specified keys should be present in the object.

## Example
To use it with a specific object type and keys:
```typescript
interface MyInterface {
  prop1?: number;
  prop2?: string;
  prop3?: boolean;
}

type MyInterfaceWithAtLeastOne = RequireAtLeastOne<MyInterface, 'prop1' | 'prop2'>;
// An object of this type must have either 'prop1' or 'prop2', or both.
```

## Example Implementation
```typescript
import { RequireAtLeastOne } from "typescript-dev-utils";

interface MyInterface {
  prop1?: number;
  prop2?: string;
  prop3?: boolean;
}

// Creating an object with at least one property from the specified keys
const obj1: RequireAtLeastOne<MyInterface, "prop1" | "prop2"> = {
  prop1: 123,
};

const obj2: RequireAtLeastOne<MyInterface, "prop1" | "prop2"> = {
  prop2: "hello",
};

const obj3: RequireAtLeastOne<MyInterface, "prop1" | "prop2"> = {
  prop1: 123,
  prop2: "hello",
};
```

## Note
`RequireAtLeastOne` can be useful when you want to enforce that at least one of certain properties must be present in an object. However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.
