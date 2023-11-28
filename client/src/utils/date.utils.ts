export class DateUtils {
  /**
   * The `formatDate` function takes a date and a format string as input and returns a formatted string
   * representation of the date.
   * @param {string | number | Date} date - The `date` parameter can be of type `string`, `number`, or
   * `Date`. It represents the date and time that needs to be formatted.
   * @param {string} format - The `format` parameter is a string that specifies the desired format for
   * the date. It can include the following placeholders: DD, D, MM, M, YYYY, YY, hh, h, mm, m, ss, s, a.
   * @returns a formatted string representation of the given date, based on the provided format string.
   */
  static formatDate(date: string | number | Date, format: string): string {
    const time = new Date(date)
    const day = time.getDate()
    const month = time.getMonth() + 1
    const year = time.getFullYear()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    const is12HourFormat = format.includes('a')
    const formatHour = is12HourFormat ? hour % 12 || 12 : hour.toString()

    return format
      .replace('DD', day.toString().padStart(2, '0'))
      .replace('D', day.toString())
      .replace('MM', month.toString().padStart(2, '0'))
      .replace('M', month.toString())
      .replace('YYYY', year.toString())
      .replace('YY', year.toString().slice(-2))
      .replace('hh', formatHour.toString().padStart(2, '0'))
      .replace('h', formatHour.toString())
      .replace('mm', minute.toString().padStart(2, '0'))
      .replace('m', minute.toString())
      .replace('ss', second.toString().padStart(2, '0'))
      .replace('s', second.toString())
      .replace('a', hour >= 12 ? 'PM' : 'AM')
  }
}
