export class ArrayUtils {
  static lastElement<T>(arr: T[]): T {
    return arr.at(-1)
  }
}
