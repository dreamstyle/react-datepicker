import { useState } from 'react'
import DateInput from './components/DateInput'
import DatePicker from './components/DatePicker'

const ReactDatePicker = (props) => {
  const [selected, setSelected] = useState(Date.now())

  return (
    <section>
      <DatePicker />
      <DateInput selected={selected} setSelected={setSelected} />
    </section>
  )
}
export default ReactDatePicker
