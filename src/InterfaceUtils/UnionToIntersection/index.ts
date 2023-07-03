/**
 * UnionToIntersection is a utility type that takes a union of types and converts them into an intersection of types.
 * It is useful when you have a union of types and need to work with a type that includes all the properties of each type in the union.
 *
 * @template U - This type parameter represents the union of types you want to convert to an intersection.
 *
 * @returns {UnionToIntersection<U>} - The return type is an intersection of all types in the union `U`.
 * If `U` is not a union of types, the return type will be `U` unchanged.
 *
 * @example
 * // To use with a union of types:
 * type MyUnion = { a: number; } | { b: string; };
 * type MyIntersection = UnionToIntersection<MyUnion>; // { a: number; } & { { b: string; }
 *
 * @note UnionToIntersection can be useful for working with type intersections from type unions. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at runtime.
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
