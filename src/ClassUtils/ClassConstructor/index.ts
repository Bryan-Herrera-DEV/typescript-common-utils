/**
 * This is a utility type for representing class construction in TypeScript.
 *
 * @template T - This type parameter represents the type of the object that will be returned by the class constructor.
 * By default it is 'any', which means it can be any type of object. However, if you want more
 * control over the type that the constructor can return, you can provide a specific type by using `ClassConstructor`.
 *
 * @param {...any[]} args - This represents any number of arguments that the class constructor can accept.
 * Since this is an 'any[]' type, the arguments can be of any type and in any number.
 *
 * @returns {T} - The return type is `T`, which is the same type that was provided to the type parameter when using `ClassConstructor`.
 * In other words, the class constructor will return an object of type `T`.
 *
 * @example
 * // To use it with a specific type:
 * type MyClassConstructor = ClassConstructor<MyClass>;
 * const myClassInstance: MyClass = new MyClassConstructor(args);
 *
 * // To use it with any type:
 * type AnyClassConstructor = ClassConstructor;
 * const anyClassInstance: any = new AnyClassConstructor(args);
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ClassConstructor<T = any> = new (...args: any[]) => T;
