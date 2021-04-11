import { getMonth, setMonth } from 'date-fns'
import Section from './styles/SelectCommonStyle'

const SelectMonth = ({ selected, setSelected, setMode }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const handleClick = (month) => {
    setMode('date')
    setSelected(setMonth(selected, month))
  }

  const isActive = (month) => {
    return getMonth(selected) === month && 'btn-active'
  }

  return (
    <Section>
      {months.map((month, i) => (
        <div className="cell" key={month}>
          <button
            className={`btn btn-primary ${isActive(i)}`}
            onClick={() => handleClick(i)}
          >
            {month}
          </button>
        </div>
      ))}
    </Section>
  )
}

export default SelectMonth
