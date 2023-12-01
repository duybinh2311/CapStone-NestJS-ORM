export class FileUtils {
  /**
   * The `downloadURL` function in TypeScript allows you to download a file from a given URL and specify
   * a custom file name.
   * @param {string} url - The `url` parameter is a string that represents the URL of the file that you
   * want to download.
   * @param {string} [fileName] - The `fileName` parameter is an optional parameter that specifies the
   * name of the file to be downloaded. If a `fileName` is provided, it will be used as the name of the
   * downloaded file. If no `fileName` is provided, the function will try to extract the file name from
   * the url. If the file name cannot be extracted from the url, the default name `download` will be used.
   */
  static downloadURL(url: string, fileName?: string) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = fileName || url.split('/').pop() || 'download'
        link.click()

        URL.revokeObjectURL(link.href)
      })
      .catch((err) => console.log(err))
  }
}
