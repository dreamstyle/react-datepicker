import { getYear } from 'date-fns'

const getDecadeInterval = (date) => {
  const year = getYear(date)
  const lastDigit = year % 10
  return [year - lastDigit, year - lastDigit + 9]
}

export { getDecadeInterval }
