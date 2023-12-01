export class FileUtils {
  static downloadURL(url: string, fileName?: string) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const fileURL = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = fileURL
        link.download = fileName || url.split('/').pop() || 'download'
        link.click()

        URL.revokeObjectURL(fileURL)
      })
      .catch((err) => console.log(err))
  }
}
