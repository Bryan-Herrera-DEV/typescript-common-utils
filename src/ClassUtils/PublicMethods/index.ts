/**
 * PublicMethods is a utility type that gets all the keys of a `T` object that correspond to public methods.
 * It is useful when you want to work with the keys of an object that represent public methods.
 *
 * @template T - This type parameter represents the object you are interested in.
 *
 * @returns {PublicMethods<T>} - The return type is a union type of all keys in `T` that correspond to public methods.
 * If there are no keys that are public methods, the return type will be `never`.
 *
 * @example
 * // For use with a specific object:
 * class MyClass {
 * public myPublicMethod(): void { }
 * private myPrivateMethod(): void { }
 * }
 *
 * type MyPublicMethods = PublicMethods<MyClass>; // "myPublicMethod".
 *
 * @note PublicMethods can be useful for working with object keys representing public methods. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.
 */
export type PublicMethods<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
