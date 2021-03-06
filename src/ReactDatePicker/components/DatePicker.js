import { Fragment, useState } from 'react'
import Header from './Header'
import Days from './Days'
import SelectDate from './SelectDate'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'
import Section from './styles/DatePickerStyle'

const DatePicker = ({ selected, setSelected, show, setShow }) => {
  const [mode, setMode] = useState('date')

  const renderView = (mode) => {
    switch (mode) {
      case 'date':
        return (
          <Fragment>
            <Days />
            <SelectDate
              selected={selected}
              setSelected={setSelected}
              setShow={setShow}
            />
          </Fragment>
        )
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

  if (!show) return null

  return (
    <Section>
      <Header
        selected={selected}
        setSelected={setSelected}
        mode={mode}
        setMode={setMode}
      />
      {renderView(mode)}
    </Section>
  )
}
export default DatePicker
