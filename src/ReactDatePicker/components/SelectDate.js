import { sub, getDay, startOfMonth, getDaysInMonth } from 'date-fns'

const SelectDate = ({ now, setNow }) => {
  const currentMonth = []
  const lastMonth = []
  const nextMonth = []

  // fill the dates of current month
  for (let i = 1; i <= getDaysInMonth(now); i++) {
    currentMonth.push(i)
  }

  // fill the empty cell before current month (dates of the last month)
  const firstDayOfMonth = getDay(startOfMonth(now))
  const datesLastMonth = getDaysInMonth(sub(now, { months: 1 }))
  for (let i = 0; i < firstDayOfMonth; i++) {
    lastMonth.push(datesLastMonth - firstDayOfMonth + 1 + i)
  }

  // fill the empty cell after current month (dates of the next month)
  const TOTAL_CELLS = 7 * 6
  const left = TOTAL_CELLS - currentMonth.length - lastMonth.length
  for (let i = 1; i <= left; i++) {
    nextMonth.push(i)
  }

  return (
    <section>
      <p>
        [debug] total days:
        {lastMonth.length + currentMonth.length + nextMonth.length}
      </p>

      {lastMonth.map((date) => (
        <button key={date}>{date}</button>
      ))}
      {currentMonth.map((date) => (
        <button key={date} style={{ color: 'blue' }}>
          {date}
        </button>
      ))}
      {nextMonth.map((date) => (
        <button key={date}>{date}</button>
      ))}
    </section>
  )
}

export default SelectDate
