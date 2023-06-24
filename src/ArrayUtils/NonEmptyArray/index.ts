/**
 * NonEmptyArray is a utility type that represents an array containing at least one element.
 *
 * @template T - This type parameter represents the type of elements that the array can contain.
 *
 * @returns {NonEmptyArray<T>} - The return type is an array of `T` containing at least one element.
 *
 * @example
 * // For use with a specific type:
 * type MyNonEmptyArray = NonEmptyArray<number>;
 * const validArray: MyNonEmptyArray = [1]; // This is valid.
 * const invalidArray: MyNonEmptyArray = []; // This will give a compilation error.
 *
 * // For use with type 'any':
 * type AnyNonEmptyArray = NonEmptyArray<any>;
 * const anyValidArray: AnyNonEmptyArray = [1, 'string', {}, []]; // This is valid.
 * const anyInvalidArray: AnyNonEmptyArray = []; // This will give a compilation error.
 *
 * @note NonEmptyArray can be useful for guaranteeing the existence of at least one element in an array, but it cannot guarantee "non-emptiness" at runtime.
 * If it is necessary to verify that an array is not empty at runtime, you will need to perform that check explicitly in your code.
 */
export type NonEmptyArray<T> = [T, ...T[]];
