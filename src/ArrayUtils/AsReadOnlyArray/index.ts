/**
 * AsReadonly is a utility type that transforms an array type `T` into its corresponding readonly array type.
 * This can be useful when you want to ensure that no mutations can be performed on the array.
 *
 * @template T - This type parameter represents the array type that you want to convert into a readonly array type.
 *
 * @returns {AsReadonly<T>} - The return type is a readonly array type that corresponds to `T`.
 * Any attempt to perform array mutations (like push or pop) will result in a compile-time error.
 *
 * @example
 * // To use it with a specific array type:
 * type MyArray = number[];
 *
 * type MyReadonlyArray = AsReadonly<MyArray>; // readonly number[]
 *
 * @note AsReadonly can be useful when you want to protect an array from being mutated.
 * However, remember that TypeScript is a compile-time type system and cannot guarantee type safety at runtime.
 */
export type AsReadonlyArray<T extends any[]> = readonly [...T];
