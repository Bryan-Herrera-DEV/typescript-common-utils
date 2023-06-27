/**
 * ClassInstance is a utility type that gets the type of an instance of a given class.
 * This type is useful when you have a reference to a class (constructor) and you want to get the type of an instance of that class.
 *
 * @template T - This type parameter represents the class (constructor) from which you want to get the instance type.
 *
 * @returns {ClassInstance<T>} - The return type is the type of an instance of the provided class.
 * If T cannot be resolved to an instance type (e.g., if T is not a constructor), then the return type will be 'any'.
 *
 * @example
 * // For use with a specific class:
 * class MyClass {
 * prop: number;
 * }
 * type MyClassInstance = ClassInstance<typeof MyClass>;
 * const instance: MyClassInstance = new MyClass();
 *
 * @note Note that ClassInstance cannot guarantee the type at runtime.
 * If you need to check the type at runtime, you will need to perform that check explicitly in your code.
 */
export type ClassInstance<T> = T extends new (...args: any[]) => infer R ? R : any
