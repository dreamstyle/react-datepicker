import { setYear } from 'date-fns'
import { getDecadeInterval } from '../utils/helper'

const SelectYear = ({ selected, setSelected, setMode }) => {
  const years = []

  // update options of year
  const [start, end] = getDecadeInterval(selected)
  for (let i = start - 1; i <= end + 1; i++) {
    years.push(i)
  }

  const handleClick = (year) => {
    setMode('month')
    setSelected(setYear(selected, year))
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
