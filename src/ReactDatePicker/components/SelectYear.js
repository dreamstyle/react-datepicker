import { getYear, setYear } from 'date-fns'
import { getDecadeInterval } from '../utils/helper'
import Section from './SelectCommonStyle'

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

  const isPrimary = (i) => {
    return i !== 0 && i !== 11 ? 'btn-primary' : ''
  }

  const isActive = (year) => {
    return getYear(selected) === year ? 'btn-active' : ''
  }

  return (
    <Section>
      {years.map((year, i) => (
        <div className="cell" key={year}>
          <button
            className={`btn ${isPrimary(i)} ${isActive(year)}`}
            onClick={() => handleClick(year)}
          >
            {year}
          </button>
        </div>
      ))}
    </Section>
  )
}

export default SelectYear
