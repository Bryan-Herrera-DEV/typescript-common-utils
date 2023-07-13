# WritableKeys
`WritableKeys` is a utility type that retrieves all keys of an object `T` that represent writable properties (i.e., not read-only). It's useful when you want to work with keys of an object representing properties that can be altered.

## Definition
```typescript
export type WritableKeys<T> = {
  [P in keyof T]: ReadonlyArray<any> extends ReadonlyArray<T[P]> ? never : P;
}[keyof T];
```

## Type Parameters
- `T`: This type parameter represents the object from which you're interested in obtaining the keys of writable properties.

## Return Value
- `WritableKeys<T>`: The return type is a union type of all keys in `T` that correspond to writable properties. If there are no keys that are writable properties, the return type will be 'never'.

## Example
To use it with a specific object:
```typescript
type MyObject = {
  readonly myReadonlyProperty: number;
  myWritableProperty: string;
};

type MyWritableKeys = WritableKeys<MyObject>; // "myWritableProperty"
```

## Example Implementation
```typescript
type MyObject = {
  readonly myReadonlyProperty: number;
  myWritableProperty: string;
};

const obj: MyObject = {
  myReadonlyProperty: 123,
  myWritableProperty: "hello",
};

// Get the writable keys of MyObject
type MyWritableKeys = WritableKeys<MyObject>; // "myWritableProperty"
```

## Note
`WritableKeys` can be useful when working with keys of objects representing writable properties. However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.