/**
 * WritableKeys is a utility type that retrieves all keys of an object `T` that represent writable properties (i.e., not read-only).
 * It's useful when you want to work with keys of an object representing properties that can be altered.
 *
 * @template T - This type parameter represents the object from which you're interested in obtaining the keys of writable properties.
 *
 * @returns {WritableKeys<T>} - The return type is a union type of all keys in `T` that correspond to writable properties.
 * If there are no keys that are writable properties, the return type will be 'never'.
 *
 * @example
 * // To use it with a specific object:
 * type MyObject = {
 *   readonly myReadonlyProperty: number;
 *   myWritableProperty: string;
 * };
 *
 * type MyWritableKeys = WritableKeys<MyObject>; // "myWritableProperty"
 *
 * @note WritableKeys can be useful when working with keys of objects representing writable properties. However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.
 */
export type WritableKeys<T> = {
  [P in keyof T]: ReadonlyArray<any> extends ReadonlyArray<T[P]> ? never : P;
}[keyof T];
