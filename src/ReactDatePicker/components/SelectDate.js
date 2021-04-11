const SelectDate = () => {
  const dates = []

  for (let i = 0; i <= 30; i++) {
    dates.push(i)
  }

  return (
    <section>
      {dates.map((date) => (
        <button key={date}>{date}</button>
      ))}
    </section>
  )
}

export default SelectDate
