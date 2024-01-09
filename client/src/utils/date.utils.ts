export class DateUtils {
  static daysOfYear = 365
  static weeksOfYear = 52
  static monthsOfYear = 12
  static daysOfWeek = 7
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
    const dayOfMonth = inputDate.getDate()
    const month = inputDate.getMonth() + 1
    const year = inputDate.getFullYear()
    const hour24Format = inputDate.getHours()
    const hour12Format = hour24Format % this.hoursOfDay12 || this.hoursOfDay12
    const minute = inputDate.getMinutes()
    const second = inputDate.getSeconds()

    return format
      .replace('DD', dayOfMonth.toString().padStart(2, '0'))
      .replace('D', dayOfMonth.toString())
      .replace('MM', month.toString().padStart(2, '0'))
      .replace('M', month.toString())
      .replace('YYYY', year.toString())
      .replace('YY', year.toString().slice(-2))
      .replace('HH', hour24Format.toString().padStart(2, '0'))
      .replace('H', hour24Format.toString())
      .replace('hh', hour12Format.toString().padStart(2, '0'))
      .replace('h', hour12Format.toString())
      .replace('mm', minute.toString().padStart(2, '0'))
      .replace('m', minute.toString())
      .replace('ss', second.toString().padStart(2, '0'))
      .replace('s', second.toString())
      .replace('a', hour24Format >= 12 ? 'pm' : 'am')
      .replace('A', hour24Format >= 12 ? 'PM' : 'AM')
  }

  /**
   * The `diffDate` function calculates the difference between a given date and the current date and
   * returns a formatted string representing the difference in minutes, hours, days, weeks, or years.
   * @param {Date | string | number} date - The `date` parameter can be of type `Date`, `string`, or
   * `number`. It represents the date for which you want to calculate the difference.
   * @param {string} [suffix] - The `suffix` parameter is an optional parameter that specifies a string
   * to be appended to the end of the result. It is used to provide additional context or information
   * about the time difference. If no suffix is provided, an empty string will be used as the default
   * value.
   * @returns a string representing the difference between the input date and the current date. The
   * returned string includes the number of minutes, hours, days, weeks, or years, depending on the
   * difference. The suffix parameter is appended to the end of the string.
   */
  static diffDate(date: Date | string | number, suffix: string = '') {
    const inputDate = new Date(date)
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate.getTime() - inputDate.getTime())

    const diffMinutes = Math.floor(diffTime / (this.millisecondsOfSecond * this.minutesOfHour))
    const diffHours = Math.floor(diffTime / (this.millisecondsOfSecond * this.secondsOfHour))
    const diffDays = Math.floor(diffTime / (this.millisecondsOfSecond * this.secondsOfHour * this.hoursOfDay24))
    const diffWeeks = Math.floor(diffTime / (this.millisecondsOfSecond * this.secondsOfHour * this.hoursOfDay24 * 7))

    switch (true) {
      case diffMinutes < 1:
        return 'Just now'

      case diffMinutes < this.minutesOfHour:
        return `${diffMinutes}m ${suffix}`

      case diffHours < this.hoursOfDay24:
        return `${diffHours}h ${suffix}`

      case diffDays < this.daysOfWeek:
        return `${diffDays}d ${suffix}`

      case diffWeeks < this.weeksOfYear:
        return `${diffWeeks}w ${suffix}`

      default:
        return `${Math.floor(diffWeeks / this.weeksOfYear)}y ${suffix}`
    }
  }
}
