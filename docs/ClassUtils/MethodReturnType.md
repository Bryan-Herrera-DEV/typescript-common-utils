# MethodReturnType
`MethodReturnType` is a utility type that gets the return type of a specific method within a `T` object. It is useful when you want to work with the return type of a specific method within an object.

## Definition
```typescript
export type MethodReturnType<T, K extends keyof T> = T[K] extends (...args: any[]) => infer R ? R : any;
```

## Type Parameters
- `T`: This type parameter represents the object you are interested in.
- `K`: This type parameter represents the key of the method within the `T` object whose return type you are interested in obtaining.

## Return Value
- `MethodReturnType<T, K>`: The return type is the return type of the method that corresponds to the `K` key within the `T` object. If the key `K` does not correspond to a method in `T`, or if the method does not have an explicit return type, the return type will be `any`.

## Example
For use with a specific object and method key:
```typescript
class MyClass {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

type MyMethodReturnType = MethodReturnType<MyClass, 'greet'>; // string.
```

## Example Implementation
```typescript
import { MethodReturnType } from "typescript-dev-utils";
import { expectType } from "tsd";

class MyClass {
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

const myInstance = new MyClass();

const result = myInstance.greet("John");

// We expect the type of the result to be the return type of the greet method
expectType<MethodReturnType<MyClass, "greet">>(result);
expect(result).toBe("Hello, John!");
```

## Note
`MethodReturnType` can be useful for working with the return type of specific methods. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at run-time.