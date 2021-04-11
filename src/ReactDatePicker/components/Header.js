const Header = ({ mode, setMode }) => {
  const displayMode = () => {
    switch (mode) {
      case 'date':
        return 'Apr, 2021'
      case 'month':
        return '2021'
      case 'year':
        return '2020-2029'
      default:
        break
    }
  }

  const handleClick = () => {
    if (mode === 'date') setMode('month')
    else if (mode === 'month') setMode('year')
  }

  return (
    <header>
      <button>{'<'}</button>
      <button onClick={() => handleClick()}> {displayMode(mode)} </button>
      <button>{'>'}</button>
    </header>
  )
}
export default Header
