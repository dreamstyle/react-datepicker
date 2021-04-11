import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  width: 250px;
  font-size: 13px;

  button {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &.btn-active {
      background-color: #db3d44;
      border-radius: 50%;
      color: #fff;
      font-weight: bold;
    }
  }
`

export default Section
