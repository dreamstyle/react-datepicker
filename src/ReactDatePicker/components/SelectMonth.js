import { setMonth } from 'date-fns'

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
