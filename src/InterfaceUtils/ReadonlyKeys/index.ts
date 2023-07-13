/**
 * ReadonlyKeys is a utility type in TypeScript that retrieves all keys of an object `T` that represent readonly properties.
 * It's helpful when you want to work with keys of an object representing properties that cannot be altered (are readonly).
 *
 * @template T - This type parameter represents the object from which you're interested in obtaining the keys of readonly properties.
 *
 * @returns {ReadonlyKeys<T>} - The return type is a union type of all keys in `T` that correspond to readonly properties.
 * If there are no keys that are readonly properties, the return type will be 'never'.
 *
 * @example
 * // To use it with a specific object:
 * type MyObject = {
 *   readonly myReadonlyProperty: number;
 *   myWritableProperty: string;
 * };
 *
 * type MyReadonlyKeys = ReadonlyKeys<MyObject>; // "myReadonlyProperty"
 *
 * @note ReadonlyKeys can be useful when working with keys of objects representing readonly properties.
 * However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.
 */
export type ReadonlyKeys<T> = { [P in keyof T]: T extends ReadonlyArray<any> ? P : never }[keyof T];
