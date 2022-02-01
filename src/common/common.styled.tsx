import styled from 'styled-components';

const ButtonSelected = styled.button`
  font-family: inherit;
  z-index: 0;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  overflow: hidden;
  box-shadow: none;
  text-align: center;
  outline: none;
  vertical-align: middle;
  background: white;
  border: 2px solid rgb(0, 70, 228);
  min-height: 40px;
  min-width: calc(120px);
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  text-decoration: none;
  color: rgb(0, 70, 228);
`

const Button = styled.button`
  font-family: inherit;
  z-index: 0;
  position: relative;
  cursor: pointer;
  border-width: 0px;
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  max-width: calc(100% - 8px);
  overflow: hidden;
  box-shadow: none;
  text-align: center;
  touch-action: manipulation;
  outline: none;
  vertical-align: middle;
  background: linear-gradient(
          73deg
          , rgb(0, 51, 204), rgb(0, 91, 255));
  min-height: 40px;
  min-width: calc(120px);
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  text-decoration: none;
  transition: none 0s ease 0s;
  color: white;
`


export const CommonStyled = {
    Button,
    ButtonSelected
}
