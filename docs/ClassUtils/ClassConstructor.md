# Class Constructor
`ClassConstructor` is a utility type that represents class construction in TypeScript.

## Definition

```ts
export type ClassConstructor<T = any> = new (...args: any[]) => T;
```

## Parameters
- `T`: This type parameter represents the type of the object that will be returned by the class constructor. By default it is `any`, which means it can be any type of object. However, if you want more control over the type that the constructor can return, you can provide a specific type using `ClassConstructor`.
- `...args: any[]`: This represents any number of arguments that the class constructor can accept. Since this is an `any[]` type, the arguments can be of any type and in any number.

## Return Value
- `T`: The return type is `T`, which is the same type that was provided to the type parameter when using `ClassConstructor`. In other words, the class constructor will return an object of type `T`.

## Examples
```ts
type MyClassConstructor = ClassConstructor<MyClass>;
const myClassInstance: MyClass = new MyClassConstructor(args);

// For use with any type:
type AnyClassConstructor = ClassConstructor;
const anyClassInstance: any = new AnyClassConstructor(args);
```
## Example Implementation
```ts
import { ClassConstructor } from "typescript-dev-utils";
import { User } from "@/test/utils/UserClass";

// Implementation of the ClassConstructor type
function instanceCreator<T>(Cls: ClassConstructor<T>, ...args: unknown[]): T {
  return new Cls(...args);
}

// Creating an instance of User using the ClassConstructor type.
const user = instanceCreator(User, "John Doe", 30);

// Verification of the User instance
console.log(user instanceof User); // Returns: true
console.log(user.name); // Returns: "John Doe".
console.log(user.age); // Returns: 30
```
