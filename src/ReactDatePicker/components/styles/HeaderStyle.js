import styled from 'styled-components'

const StyledHeader = styled.header`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .current-date {
    width: 70%;
    font-weight: bold;

    &:active {
      background-color: #eee;
    }
  }
`

export default StyledHeader
