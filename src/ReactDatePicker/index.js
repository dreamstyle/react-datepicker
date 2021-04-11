import { useState } from 'react'
import Section from './style'
import DateInput from './components/DateInput'
import DatePicker from './components/DatePicker'

const ReactDatePicker = (props) => {
  const [selected, setSelected] = useState(Date.now())

  return (
    <Section>
      <DateInput selected={selected} setSelected={setSelected} />
      <DatePicker selected={selected} setSelected={setSelected} />
    </Section>
  )
}
export default ReactDatePicker
