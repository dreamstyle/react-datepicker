import styled from 'styled-components'

const Section = styled.section`
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
  }

  .input {
    padding-left: 24px;
    line-height: 1.6;
  }
`

export default Section
