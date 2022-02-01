import styled from 'styled-components';
import React from 'react';
import {devices} from '../../device';

const WizardContainer = styled.div`
  display: flex;
  align-items: center;
`
const WizardItems = styled.ul`
  list-style: none;
  justify-content: center;
  display: flex;
  background-color: white;
  border-radius: 100px;
  overflow: hidden;
  padding: 0;
`

const WizardItem = styled.li<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {$active?:boolean}>`
  position: relative;
  list-style: none;
  display: flex;
  user-select: none;
  align-items: center;
  margin-left: 0;
  
  min-width: ${(props) => props.$active ? "115px" : "0"};
  padding: 9px;
  background-color: ${(props) => props.$active ? "#0046e4" : "white"};
  ${({ $active }) => $active && `
  &:not(:last-child) {
      margin-right: 10px;

  }
    &:not(:last-child):before {
        border-bottom: 20px solid transparent;
        border-left: 10px solid ${$active ? "#0046e4" : "white"};
        border-top: 20px solid transparent;
        bottom: 0;
        content: "";
        height: 0;
        position: absolute;
        right: -10px;
        width: 0;
      }
    `}
  ${({ $active }) => !$active && `
        &:not(:last-child):after {
        background-color: #8a9bae;
        content: "";
        display: block;
        height: 30px;
        opacity: .25;
        position: absolute;
        right: 0;
        top: 15%;
        width: 1px;
      }
    `}

  .step-number {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$active ? "#ffffff" : "#e6e6e6"};;
    border-radius: 50%;
    color:  ${(props) => props.$active ? "#0046e4" : "white"};;
    font-size: 12px;
    font-weight: 700;
    height: 20px;
    line-height: 22px;
    text-align: center;
    vertical-align: middle;
    width: 20px;
    margin-right: 5px;
  }
  .step-name {
    color:  ${(props) => props.$active ? "white" : "#8a9bae"};;
    font-size: 14px;
    font-weight: 900;
    padding-right: 5px;
    display: ${(props) => props.$active ? 'block' : 'none'};
    @media${devices.mobileL} {
        display: ${(props) => props.$active ? 'block' : 'none'};
    }
    @media${devices.laptop} {
        display: block;
    }
  }
`

export const WizardStyled = {
    WizardContainer,
    WizardItem,
    WizardItems
}
