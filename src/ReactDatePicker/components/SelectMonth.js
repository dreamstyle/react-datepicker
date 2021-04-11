const SelectMonth = ({ setMode }) => {
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
  }

  return (
    <section>
      {months.map((month) => (
        <button key={month} onClick={() => handleClick()}>
          {month}
        </button>
      ))}
    </section>
  )
}

export default SelectMonth
