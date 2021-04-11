const SelectYear = ({ setMode }) => {
  const years = []
  for (let i = 2019; i <= 2030; i++) {
    years.push(i)
  }

  const handleClick = () => {
    setMode('month')
  }

  return (
    <section>
      {years.map((year) => (
        <button key={year} onClick={() => handleClick()}>
          {year}
        </button>
      ))}
    </section>
  )
}

export default SelectYear
