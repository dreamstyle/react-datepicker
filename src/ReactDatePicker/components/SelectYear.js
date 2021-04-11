import { setYear } from 'date-fns'
import { getDecadeInterval } from '../utils/helper'

const SelectYear = ({ now, setNow, setMode }) => {
  const years = []

  // update options of year
  const [start, end] = getDecadeInterval(now)
  for (let i = start - 1; i <= end + 1; i++) {
    years.push(i)
  }

  const handleClick = (year) => {
    setMode('month')
    setNow(setYear(now, year))
  }

  return (
    <section>
      {years.map((year) => (
        <button key={year} onClick={() => handleClick(year)}>
          {year}
        </button>
      ))}
    </section>
  )
}

export default SelectYear
