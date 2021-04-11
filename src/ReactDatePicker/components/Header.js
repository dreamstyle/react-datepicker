import { format, add, sub } from 'date-fns'
import { getDecadeInterval } from '../utils/helper'

const Header = ({ now, setNow, mode, setMode }) => {
  const displayMode = () => {
    switch (mode) {
      case 'date':
        return format(now, 'MMM, yyyy')
      case 'month':
        return format(now, 'yyyy')
      case 'year':
        const [start, end] = getDecadeInterval(now)
        return `${start}-${end}`
      default:
        break
    }
  }

  const handleClickSubtract = () => {
    switch (mode) {
      case 'date':
        setNow(sub(now, { months: 1 }))
        break
      case 'month':
        setNow(sub(now, { years: 1 }))
        break
      case 'year':
        setNow(sub(now, { years: 10 }))
        break
      default:
        break
    }
  }

  const handleClickAdd = () => {
    switch (mode) {
      case 'date':
        setNow(add(now, { months: 1 }))
        break
      case 'month':
        setNow(add(now, { years: 1 }))
        break
      case 'year':
        setNow(add(now, { years: 10 }))
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
