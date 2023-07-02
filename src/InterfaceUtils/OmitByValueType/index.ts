/**
 * OmitByValueType is a utility type that gets all keys of a `T` object whose values do not correspond to the `U` type.
 * It is useful when you want to work with keys of an object that have a specific value type and exclude those that do not.
 *
 * @template T - This type parameter represents the object you are interested in.
 *
 * @template U - This type parameter represents the type of value you are looking to exclude within the `T` object.
 *
 * @returns {OmitByValueType<T, U>} - The return type is a union type of all keys in `T` whose values do not correspond to type `U`.
 * If all keys have a value of type `U`, the return type will be `never`.
 *
 * @example
 * // For use with a specific object and value type:
 * type MyType = { a: number; b: string; c: number; };
 * type NonNumberKeys = OmitByValueType<MyType, number>; // 'b'
 *
 * @note OmitByValueType can be useful for working with object keys that have a specific value type. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.
 */
export type OmitByValueType<T, U> = {
  [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];
