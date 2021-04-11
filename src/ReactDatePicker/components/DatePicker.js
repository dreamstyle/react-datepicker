import { useState } from 'react'
import Header from './Header'
import Days from './Days'
import SelectDate from './SelectDate'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'

const DatePicker = (props) => {
  const [mode, setMode] = useState('date')

  const renderView = (mode) => {
    switch (mode) {
      case 'date':
        return <SelectDate />
      case 'month':
        return <SelectMonth />
      case 'year':
        return <SelectYear />
      default:
        break
    }
  }

  return (
    <section>
      <Header mode={mode} setMode={setMode} />
      <Days />
      {renderView(mode)}
    </section>
  )
}
export default DatePicker
