import Section from './styles/DaysStyle'

const Days = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  return (
    <Section>
      {days.map((day) => (
        <span key={day} className="day">
          {day}
        </span>
      ))}
    </Section>
  )
}

export default Days
