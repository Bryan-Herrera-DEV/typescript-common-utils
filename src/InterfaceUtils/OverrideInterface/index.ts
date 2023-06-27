/**
 * OverrideInterface is a utility type that takes two types `T` and `U`, and combines their properties.
 * However, if `T` and `U` have properties with the same keys, the properties of `U` overwrite those of `T`.
 *
 * @template T - This type parameter represents the first type you want to combine.
 *
 * @template U - This type parameter represents the second type, whose properties will overwrite those of `T` if they have the same keys.
 *
 * @returns {OverrideInterface<T, U>} - The return type is a combination of `T` and `U`, but with the properties of `U` overwriting those of `T` if they have the same keys.
 *
 * @example
 * // For use with two specific interface types:
 * interface MyFirstType { a: number; b: string; }
 * interface MySecondType { b: number; c: boolean; }
 * type MyOverrideType = OverrideInterface<MyFirstType, MySecondType>;
 * // The resulting type is { a: number; b: number; c: boolean; }
 *
 * @note OverrideInterface can be useful for modifying existing types or for combining types with possibly matching properties. Note, however, that TypeScript is a compile-time type system and cannot guarantee run-time consistency.
 */
export type OverrideInterface<T, U> = Omit<T, keyof U> & U;
