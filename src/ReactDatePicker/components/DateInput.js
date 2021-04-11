import { useState, useEffect } from 'react'
import { format, set } from 'date-fns'
import { isValidDateFormat } from '../utils/helper'

const DateInput = ({ selected, setSelected }) => {
  const [date, setDate] = useState(format(selected, 'yyyy-M-d'))

  useEffect(() => {
    setDate(format(selected, 'yyyy-M-d'))
  }, [selected])

  const handleChange = (e) => {
    const val = e.target.value
    setDate(val)

    if (isValidDateFormat(val)) updateSelected(val)
  }

  const updateSelected = (val) => {
    const dateArr = val.split('-')
    setSelected(
      set(selected, {
        year: dateArr[0],
        month: dateArr[1] - 1, // month starts from 0
        date: dateArr[2],
      })
    )
  }

  return <input type="text" value={date} onChange={(e) => handleChange(e)} />
}

export default DateInput
