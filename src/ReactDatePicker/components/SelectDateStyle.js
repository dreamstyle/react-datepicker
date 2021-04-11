import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .cell {
    height: 30px;
    width: ${100 / 7}%;
  }

  .btn {
    color: #ccc;
  }

  .btn-primary {
    color: #000;
  }

  .btn-today {
    color: #db3d44;
  }
`

export default Section
