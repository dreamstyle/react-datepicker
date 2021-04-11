import { useState } from 'react'
import DateInput from './components/DateInput'
import DatePicker from './components/DatePicker'

const ReactDatePicker = (props) => {
  const [selected, setSelected] = useState(Date.now())

  return (
    <section>
      <DateInput selected={selected} setSelected={setSelected} />
      <DatePicker selected={selected} setSelected={setSelected} />
    </section>
  )
}
export default ReactDatePicker
