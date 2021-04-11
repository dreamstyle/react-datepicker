import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .day {
    width: ${100 / 7}%;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
`

export default Section
