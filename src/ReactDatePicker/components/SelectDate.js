import {
  set,
  sub,
  getDay,
  getDate,
  getMonth,
  startOfMonth,
  getDaysInMonth,
} from 'date-fns'

const SelectDate = ({ selected, setSelected }) => {
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
  }

  return (
    <section>
      <p>
        [debug] total days:
        {lastMonth.length + currentMonth.length + nextMonth.length}
      </p>

      {lastMonth.map((date) => (
        <button
          key={date}
          onClick={() => handleClick({ month: getMonth(selected) - 1, date })}
        >
          {date}
        </button>
      ))}
      {currentMonth.map((date) => (
        <button
          key={date}
          style={{ color: getDate(selected) === date ? 'red' : 'blue' }}
          onClick={() => handleClick({ date })}
        >
          {date}
        </button>
      ))}
      {nextMonth.map((date) => (
        <button
          key={date}
          onClick={() => handleClick({ month: getMonth(selected) + 1, date })}
        >
          {date}
        </button>
      ))}
    </section>
  )
}

export default SelectDate
