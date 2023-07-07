/**
 * MethodReturnType is a utility type that gets the return type of a specific method within a `T` object.
 * It is useful when you want to work with the return type of a specific method within an object.
 *
 * @template T - This type parameter represents the object you are interested in.
 *
 * @template K - This type parameter represents the key of the method within the `T` object whose return type you are interested in obtaining.
 *
 * @returns {MethodReturnType<T, K>} - The return type is the return type of the method that corresponds to the `K` key within the `T` object.
 * If the key `K` does not correspond to a method in `T`, or if the method does not have an explicit return type, the return type will be `any`.
 *
 * @example
 * // For use with a specific object and method key:
 * class MyClass {
 * myMethod(): number { return 42; }
 * }
 *
 * type MyMethodReturnType = MethodReturnType<MyClass, 'myMethod'>; // number.
 *
 * @note MethodReturnType can be useful for working with the return type of specific methods. However, remember that TypeScript is a compile-time type system and cannot guarantee type consistency at run-time.
 */
export type MethodReturnType<T, K extends keyof T> = T[K] extends (...args: any[]) => infer R ? R : any;
