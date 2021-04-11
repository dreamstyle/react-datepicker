import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;

  .cell {
    margin-bottom: 8px;
    width: ${100 / 4}%;
    text-align: center;
  }

  .btn {
    width: 44px;
    height: 44px;
    color: #ccc;
  }

  .btn-primary {
    color: #000;
  }
`

export default Section
