import styled from 'styled-components'

export const Logo = styled.span`
    span {
      width: 50px;
      background-color: #fff8b7;
      height: 25px;
      position: relative;
      display: inline-block;
      top: 8px;
      left: -10px;
    }

    p {
      font-size: 2em;
      position: absolute;
      top: -6px;
      font-weight: 900;
      color: #3c3e3c;
      left: -11px;
      line-height: 1;
      font-family: 'Caveat', cursive;
    }
`

export const BtnWrapper = styled.div`
    float: right;
`
// drop menu
export const MenuInnerWrapper = styled.div`
  > * {
    margin: 5px;
    font-size: 12px;
  }
`