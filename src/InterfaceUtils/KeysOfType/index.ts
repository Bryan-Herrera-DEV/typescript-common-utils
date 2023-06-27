/**
 * KeysOfType is a utility type that gets all the keys of a `T` object whose values correspond to the `U` type.
 * It is useful when you want to work with keys of an object that have a specific value type.
 *
 * @template T - This type parameter represents the object you are interested in.
 *
 * @template U - This type parameter represents the type of value you are looking for within the `T` object.
 *
 * @returns {KeysOfType<T, U>} - The return type is a union type of all keys in `T` whose values correspond to type `U`.
 * If there are no keys having a value of type `U`, the return type will be `never`.
 *
 * @example
 * // For use with a specific object and value type:
 * type MyType = { a: number; b: string; c: number; };
 * type NumberKeys = KeysOfType<MyType, number>; // 'a' | 'c'
 *
 * @note KeysOfType can be useful for working with object keys that have a specific type value. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at run-time.
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
