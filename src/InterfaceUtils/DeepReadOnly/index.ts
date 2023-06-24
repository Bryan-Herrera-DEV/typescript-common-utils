/**
 * DeepReadonly is a utility type in TypeScript that takes a `T` type and makes all of its properties (and the properties of its properties, etc.) read-only.
 *
 * @template T - This type parameter represents any type of object you wish to convert to a read-only version.
 *
 * @returns {DeepReadonly<T>} - The return type is a "deep" read-only version of `T`.
 * Each property of `T` (and subproperties, etc.) will be read-only, which means that you cannot assign new values to them after creation.
 *
 * @example
 * // For use with a single object:
 * type MyReadonlyObj = DeepReadonly<{ prop: number, subObj: { prop2: string } }>;
 * const obj: MyReadonlyObj = { prop: 1, subObj: { prop2: 'test' } };
 * // This will give an error, since 'prop' is read-only.
 * obj.prop = 2;
 *
 * @note DeepReadonly can be very useful for working with complex object types and ensuring immutability, but be aware that it can have a performance impact if overused.
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
