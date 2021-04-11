import {
  set,
  sub,
  getDay,
  getDate,
  getMonth,
  startOfMonth,
  getDaysInMonth,
  format,
} from 'date-fns'
import Section from './styles/SelectDateStyle'

const SelectDate = ({ selected, setSelected, setShow }) => {
  const today = Date.now()
  const currentMonth = []
  const lastMonth = []
  const nextMonth = []

  // fill the dates of current month
  for (let i = 1; i <= getDaysInMonth(selected); i++) {
    currentMonth.push(i)
  }

  // fill the empty cell before current month (dates of the last month)
  const firstDayOfMonth = getDay(startOfMonth(selected))
  const datesLastMonth = getDaysInMonth(sub(selected, { months: 1 }))
  for (let i = 0; i < firstDayOfMonth; i++) {
    lastMonth.push(datesLastMonth - firstDayOfMonth + 1 + i)
  }

  // fill the empty cell after current month (dates of the next month)
  const TOTAL_CELLS = 7 * 6
  const left = TOTAL_CELLS - currentMonth.length - lastMonth.length
  for (let i = 1; i <= left; i++) {
    nextMonth.push(i)
  }

  const handleClick = (values) => {
    const newNow = set(selected, values)
    setSelected(newNow)
    setShow(false)
  }

  const isToday = (date) => {
    const isoToday = format(today, 'yyyy-MM')
    const isoSelected = format(selected, 'yyyy-MM')
    return isoToday === isoSelected && getDate(today) === date
      ? 'btn-today'
      : null
  }

  const isSelected = (date) => {
    return getDate(selected) === date
  }

  return (
    <Section>
      {lastMonth.map((date) => (
        <div className="cell" key={date}>
          <button
            className="btn"
            onClick={() => handleClick({ month: getMonth(selected) - 1, date })}
          >
            {date}
          </button>
        </div>
      ))}
      {currentMonth.map((date) => (
        <div className="cell" key={date}>
          <button
            className={`btn btn-primary ${isToday(date)} ${
              isSelected(date) && 'btn-active'
            }`}
            onClick={() => handleClick({ date })}
          >
            {date}
          </button>
        </div>
      ))}
      {nextMonth.map((date) => (
        <div className="cell" key={date}>
          <button
            className="btn"
            onClick={() => handleClick({ month: getMonth(selected) + 1, date })}
          >
            {date}
          </button>
        </div>
      ))}
    </Section>
  )
}

export default SelectDate
