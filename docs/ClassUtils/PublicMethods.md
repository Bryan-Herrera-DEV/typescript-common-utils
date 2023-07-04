# PublicMethods
`PublicMethods` is a utility type that gets all the keys of a `T` object that correspond to public methods. It is useful when you want to work with the keys of an object that represent public methods.

## Definition
```ts
export type PublicMethods<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
```

## Parameters
- `T`: This type parameter represents the object you are interested in.

## Return Type
- `PublicMethods<T>`: The return type is a union type of all keys in `T` that correspond to public methods. If there are no keys that are public methods, the return type will be `never`.

## Example
For use with a specific object:
```ts
class MyClass {
  public myPublicMethod(): void { }
  private myPrivateMethod(): void { }
}

type MyPublicMethods = PublicMethods<MyClass>; // "myPublicMethod".
```

## Example Implementation
```ts
import { PublicMethods } from "typescript-dev-utils";
import { expectType } from "tsd";

// Function to get the public methods of an object
const obtenerMetodosPublicos = <T extends { [key: string]: any }>(obj: T): Array<PublicMethods<T>> => {
  const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(
    key => typeof obj[key] === "function" && key !== "constructor"
  ) as Array<PublicMethods<T>>;
  return keys;
};

// Example usage with a class
class MiClase {
  public nombre: string = "Juan";
  public apellido: string = "Perez";

  public saludar() {
    return `Hola, mi nombre es ${this.nombre} ${this.apellido}`;
  }
}

const miObjeto = new MiClase();

const resultado = obtenerMetodosPublicos(miObjeto);

// Type assertion and expectation
expectType<Array<PublicMethods<MiClase>>>(resultado);
expect(resultado).toEqual(["saludar"]);
```

## Notes
`PublicMethods` can be useful for working with object keys representing public methods. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.