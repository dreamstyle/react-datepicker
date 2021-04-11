import { format, add, sub } from 'date-fns'
import { getDecadeInterval } from '../utils/helper'

const Header = ({ selected, setSelected, mode, setMode }) => {
  const displayMode = () => {
    switch (mode) {
      case 'date':
        return format(selected, 'MMM, yyyy')
      case 'month':
        return format(selected, 'yyyy')
      case 'year':
        const [start, end] = getDecadeInterval(selected)
        return `${start}-${end}`
      default:
        break
    }
  }

  const handleClickSubtract = () => {
    switch (mode) {
      case 'date':
        setSelected(sub(selected, { months: 1 }))
        break
      case 'month':
        setSelected(sub(selected, { years: 1 }))
        break
      case 'year':
        setSelected(sub(selected, { years: 10 }))
        break
      default:
        break
    }
  }

  const handleClickAdd = () => {
    switch (mode) {
      case 'date':
        setSelected(add(selected, { months: 1 }))
        break
      case 'month':
        setSelected(add(selected, { years: 1 }))
        break
      case 'year':
        setSelected(add(selected, { years: 10 }))
        break
      default:
        break
    }
  }

  const handleClickMode = () => {
    if (mode === 'date') setMode('month')
    else if (mode === 'month') setMode('year')
  }

  return (
    <header>
      <button onClick={() => handleClickSubtract()}>{'<'}</button>
      <button onClick={() => handleClickMode()}> {displayMode(mode)} </button>
      <button onClick={() => handleClickAdd()}>{'>'}</button>
    </header>
  )
}

export default Header
