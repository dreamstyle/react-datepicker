import { getYear } from 'date-fns'

const getDecadeInterval = (date) => {
  const year = getYear(date)
  const lastDigit = year % 10
  return [year - lastDigit, year - lastDigit + 9]
}

const isValidDateFormat = (date) => {
  const regex = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/
  return regex.test(date)
}

export { getDecadeInterval, isValidDateFormat }
