import { styled } from 'styled-components'

export const HeaderMaintanceContainer = styled.header`
  width: 100%;
  height: 115px;
  position: relative;
  margin-top: 50px;

  .logo-container {
    position: relative;
    margin: 0 auto;
    width: 285px;
    height: 114px;
    z-index: 2;
  }

  & img {
    position: absolute;
    z-index: 2;
  }

  @media (max-width: 1366px) {
    height: auto;
    margin-top: 25px;
  }
`
