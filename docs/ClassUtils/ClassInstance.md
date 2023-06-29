# ClassInstance

`ClassInstance` is a utility type that fetches the type of an instance from a given class.
This type becomes useful when you have a reference to a class (constructor) and want to obtain the type of an instance from that class.

## Definition

```typescript
export type ClassInstance<T> = T extends new (...args: any[]) => infer R ? R : any
```

## Parameters

- `T`: This type parameter represents the class (constructor) from which you want to obtain the instance type.

## Return Value

- `ClassInstance<T>`: The return type is the instance type of the provided class.
If `T` cannot be resolved to an instance type (for instance, if `T` is not a constructor), then the return type defaults to `any`.

## Examples

```typescript
// For use with a specific class:
class MyClass {
  prop: number;
}
type MyClassInstance = ClassInstance<typeof MyClass>;
const instance: MyClassInstance = new MyClass();
```

> Note: `ClassInstance` cannot guarantee the type at runtime. If you need to check the type at runtime, you will have to perform that check explicitly in your code.

## Example Implementation

```typescript
import { ClassInstance } from "./";

class MyClass {
  constructor(public message: string) {}
}

function createInstance<T extends new (...args: any[]) => any>(Cls: T, args: ConstructorParameters<T>): ClassInstance<T> {
  return new Cls(...args) as ClassInstance<T>;
}

const instance = createInstance(MyClass, ["Hello World"]);
console.log(instance instanceof MyClass); // Returns: true
console.log(instance.message); // Returns: "Hello World"
```
