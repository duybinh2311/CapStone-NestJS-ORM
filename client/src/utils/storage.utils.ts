export class StorageUtils {
  static local = {
    save(key: string, data: any): void {
      const dataJSON = JSON.stringify(data)
      localStorage.setItem(key, dataJSON)
    },

    get(key: string): any | null {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    },

    remove(key: string): void {
      localStorage.removeItem(key)
    },
  }
}
