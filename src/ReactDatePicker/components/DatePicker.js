import { useState } from 'react'
import Header from './Header'
import Days from './Days'
import SelectDate from './SelectDate'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'

const DatePicker = ({ selected, setSelected }) => {
  const [mode, setMode] = useState('date')

  const renderView = (mode) => {
    switch (mode) {
      case 'date':
        return <SelectDate selected={selected} setSelected={setSelected} />
      case 'month':
        return (
          <SelectMonth
            selected={selected}
            setSelected={setSelected}
            setMode={setMode}
          />
        )
      case 'year':
        return (
          <SelectYear
            selected={selected}
            setSelected={setSelected}
            setMode={setMode}
          />
        )
      default:
        break
    }
  }

  return (
    <section>
      <Header
        selected={selected}
        setSelected={setSelected}
        mode={mode}
        setMode={setMode}
      />
      <Days />
      {renderView(mode)}
    </section>
  )
}
export default DatePicker
