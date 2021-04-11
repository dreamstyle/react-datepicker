import { setMonth } from 'date-fns'

const SelectMonth = ({ now, setNow, setMode }) => {
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
    setNow(setMonth(now, month))
  }

  return (
    <section>
      {months.map((month, i) => (
        <button key={month} onClick={() => handleClick(i)}>
          {month}
        </button>
      ))}
    </section>
  )
}

export default SelectMonth
