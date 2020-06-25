import styled from 'styled-components'

export const GoogleBtn = styled.button`
    height: 40px;
    border-width: 0;
    background: white;
    color: #737373;
    border-radius: 5px;
    white-space: nowrap;
    box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
    transition-property: background-color, box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;
    padding: 0;
    
    &:focus,
    &:hover {
      box-shadow: 1px 3px 4px 1px rgba(0,0,0,0.1);
    }
    
    &:active {
      background-color: #e5e5e5;
      box-shadow: none;
      transition-duration: 10ms;
    }
      
  .google-button__icon {
    display: inline-block;
    vertical-align: middle;
    margin: 8px 0 8px 8px;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
  }
  
  .google-button__icon--plus {
    width: 27px;
  }
  
  .google-button__text {
    display: inline-block;
    vertical-align: middle;
    padding: 0 24px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Roboto',arial,sans-serif;
  }
`

export const AuthWrapper = styled.div`
    width: 350px;
    margin: 0 auto;
    position: relative;
    top: 30%;
    transform: translateY(-30%);
    border: 1px solid #eee;
    padding: 2em 3em;
    box-shadow: 0px 1px 6px 2px rgba(208, 205, 205, 0.3);
    h5 {
      padding-bottom: 1.5em;
      text-align: center;
      font-weight: bold;
      letter-spacing: 10px;
    }
    @media(max-width:580px) {
      width: 80%;
    }
`
export const AuthBtn =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    button {
      margin: 5px 0;
    }
`