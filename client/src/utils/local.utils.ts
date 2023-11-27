export class LocalUtils {
  /**
   * The function saves data to the local storage using a specified key.
   * @param {string} key - The key parameter is a string that represents the key under which the data
   * will be saved in the localStorage.
   * @param {any} data - The `data` parameter is the data that you want to save. It can be of any type,
   * as it will be converted to a JSON string before saving it to the local storage.
   */
  static save(key: string, data: any): void {
    const dataJSON = JSON.stringify(data)
    localStorage.setItem(key, dataJSON)
  }

  /**
   * The function retrieves data from the local storage using a specified key and returns it as a parsed
   * JSON object, or null if the data does not exist.
   * @param {string} key - The key parameter is a string that represents the key used to retrieve data
   * from the localStorage.
   * @returns The method is returning the value stored in the localStorage with the specified key. If the
   * value exists, it is parsed from JSON format and returned. If the value does not exist, null is
   * returned.
   */
  static get(key: string): any | null {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  /**
   * The function removes an item from the localStorage using a specified key.
   * @param {string} key - The key parameter is a string that represents the key of the item to be
   * removed from the localStorage.
   */
  static remove(key: string): void {
    localStorage.removeItem(key)
  }
}
