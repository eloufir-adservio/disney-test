import styled from 'styled-components';
import {devices} from '../../../device';
import React from 'react';

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media${devices.laptop} {
    flex-direction: row;
  }
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0 3px 10px 0;
`

const RoomImage = styled.div`
  border-radius: 0;
  padding: 0;
  width: 100%;
  @media${devices.laptop} {
    min-width: 240px;
    width: 240px;
  }
  flex: none;
`

const RoomContent = styled.div<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {$selected?:boolean}>`
  flex-grow: 1;
  padding: 40px 20px 20px;
  position: relative;
  ${({ $selected }) => !$selected && `
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 90%;
    height: 1px;
    inset: auto 5% 0px;
    background-color: #E6E6E6;
    transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0.167s;
    transform-origin: center center;
  }
@media${devices.laptop} {
  &:after {
    width: 1px;
    height: 90%;
    inset: 5% 0px 5% auto;
  }
}
  `}
`

const RoomPrice = styled.div<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {$selected?:boolean}>`
  flex: none;
  background-color: ${(props) => props.$selected ? '#f7f7f7' : 'transparent'};
  width: 100%;
  @media${devices.laptop} {
    min-width: 200px;
    width: 200px;
  }
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  padding: 20px;
  position: relative;
`

export const RoomSelectionStyled = {
    RoomContainer,
    RoomImage,
    RoomContent,
    RoomPrice
}
