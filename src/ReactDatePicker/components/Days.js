const Days = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  return (
    <section>
      {days.map((day) => (
        <span key={day}>{day} </span>
      ))}
    </section>
  )
}
export default Days
