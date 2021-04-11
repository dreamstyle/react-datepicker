import { useState } from 'react'
import Section from './style'
import DateInput from './components/DateInput'
import DatePicker from './components/DatePicker'

const ReactDatePicker = ({ date }) => {
  const [selected, setSelected] = useState(date ? new Date(date) : Date.now())
  const [show, setShow] = useState(false)

  return (
    <Section>
      <DateInput
        selected={selected}
        setSelected={setSelected}
        setShow={setShow}
      />
      <DatePicker
        selected={selected}
        setSelected={setSelected}
        show={show}
        setShow={setShow}
      />
    </Section>
  )
}
export default ReactDatePicker
