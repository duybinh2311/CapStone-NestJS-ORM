import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export class DayJsUtils {
  static format(date: Date | string | number, format: string) {
    const inputDate = dayjs(date)
    return inputDate.format(format)
  }

  static diffDate(date: Date | string | number) {
    return dayjs(date).fromNow()
  }
}
