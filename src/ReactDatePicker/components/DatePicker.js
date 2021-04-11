import { useState } from 'react'
import Header from './Header'
import Days from './Days'
import SelectDate from './SelectDate'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'

const DatePicker = (props) => {
  const [now, setNow] = useState(Date.now())
  const [mode, setMode] = useState('date')

  const renderView = (mode) => {
    switch (mode) {
      case 'date':
        return <SelectDate />
      case 'month':
        return <SelectMonth now={now} setNow={setNow} setMode={setMode} />
      case 'year':
        return <SelectYear now={now} setNow={setNow} setMode={setMode} />
      default:
        break
    }
  }

  return (
    <section>
      <Header now={now} setNow={setNow} mode={mode} setMode={setMode} />
      <Days />
      {renderView(mode)}
    </section>
  )
}
export default DatePicker
