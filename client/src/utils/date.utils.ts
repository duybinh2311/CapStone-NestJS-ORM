export class DateUtils {
  static hoursOfDay12 = 12
  static hoursOfDay24 = 24
  static minutesOfHour = 60
  static secondsOfMinute = 60
  static secondsOfHour = 3600
  static millisecondsOfSecond = 1000
  /**
   * The `formatDate` function takes a date and a format string as input and returns a formatted string
   * representation of the date.
   * @param {string | number | Date} date - The `date` parameter can be of type `string`, `number`, or
   * `Date`. It represents the date and time that needs to be formatted.
   * @param {string} format - The `format` parameter is a string that specifies the desired format for
   * the date. It can include the following placeholders: DD, D, MM, M, YYYY, YY, hh, h, mm, m, ss, s, a.
   * @returns a formatted string representation of the given date, based on the provided format string.
   */
  static format(date: string | number | Date, format: string): string {
    const inputDate = new Date(date)
    const day = inputDate.getDate()
    const month = inputDate.getMonth() + 1
    const year = inputDate.getFullYear()
    const hour = inputDate.getHours()
    const minute = inputDate.getMinutes()
    const second = inputDate.getSeconds()

    const is12HourFormat = format.includes('a')
    const formatHour = is12HourFormat ? hour % this.hoursOfDay12 || this.hoursOfDay12 : hour.toString()

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

  /**
   * The function calculates the difference between a given date and the current date and returns a
   * string representing the difference in minutes, hours, days, or weeks.
   * @param {Date | string | number} date - The `date` parameter can be of type `Date`, `string`, or
   * `number`. It represents the date for which you want to calculate the difference.
   * @returns a string representing the difference between the input date and the current date. The
   * string can have the following formats: d, h, m, or 'Just now'.
   */
  static diffDate(date: Date | string | number, suffix?: string) {
    const inputDate = new Date(date)
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate.getTime() - inputDate.getTime())

    const diffDays = Math.floor(diffTime / (this.millisecondsOfSecond * this.secondsOfHour * this.hoursOfDay24))
    const diffHours = Math.floor(diffTime / (this.millisecondsOfSecond * this.secondsOfHour))
    const diffMinutes = Math.floor(diffTime / (this.millisecondsOfSecond * this.minutesOfHour))

    if (diffMinutes < 1) {
      return 'Just now'
    } else if (diffMinutes < 60) {
      return `${diffMinutes}m ${suffix || ''}`
    } else if (diffHours < 24) {
      return `${diffHours}h ${suffix || ''}`
    } else if (diffDays < 7) {
      return `${diffDays}d ${suffix || ''}`
    } else {
      return `${Math.floor(diffDays / 7)}w ${suffix || ''}`
    }
  }
}
