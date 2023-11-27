export class ArrayUtils {
  /**
   * The function "lastElement" returns the last element of an array.
   * @param {any[]} arr - The parameter "arr" is an array of any type.
   * @returns The last element of the array.
   */
  static lastElement(arr: any[]): any {
    return arr.at(-1)
  }
}
