/**
 * MethodReturnType es un tipo utilitario que obtiene el tipo de retorno de un método específico dentro de un objeto `T`.
 * Es útil cuando quieres trabajar con el tipo de retorno de un método específico dentro de un objeto.
 *
 * @template T - Este parámetro de tipo representa el objeto en el que estás interesado.
 *
 * @template K - Este parámetro de tipo representa la clave del método dentro del objeto `T` cuyo tipo de retorno estás interesado en obtener.
 *
 * @returns {MethodReturnType<T, K>} - El tipo de retorno es el tipo de retorno del método que corresponde a la clave `K` dentro del objeto `T`.
 * Si la clave `K` no corresponde a un método en `T`, o si el método no tiene un tipo de retorno explícito, el tipo de retorno será 'any'.
 *
 * @example
 * // Para usarlo con un objeto específico y una clave de método:
 * class MyClass {
 *   myMethod(): number { return 42; }
 * }
 *
 * type MyMethodReturnType = MethodReturnType<MyClass, 'myMethod'>; // number
 *
 * @note MethodReturnType puede ser útil para trabajar con el tipo de retorno de métodos específicos. Sin embargo, recuerda que TypeScript es un sistema de tipos en tiempo de compilación y no puede garantizar la coherencia de los tipos en tiempo de ejecución.
 */
export type MethodReturnType<T, K extends keyof T> = T[K] extends (...args: any[]) => infer R ? R : any;
