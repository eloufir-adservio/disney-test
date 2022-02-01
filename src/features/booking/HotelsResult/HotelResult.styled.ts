import styled from 'styled-components';
import {devices} from '../../../device';

const HotelContentImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-height: 190px;
  overflow: hidden;
  clip-path: ellipse(100% 100% at 50% 0%);
  @media${devices.laptop} {
    max-width: 276px;
    height: auto;
    min-height: 250px;
    max-height: inherit;
    clip-path: ellipse(90% 100% at 10% 50%);
  }
`

const HotelContent = styled.div`
  display: flex;
  flex-direction: column;
  @media${devices.laptop} {
    flex-direction: row;
  }
  gap: 0.75rem;
  box-shadow: rgb(9 17 41 / 10%) 0 4px 8px -2px;
  
`

const HotelFooter = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 0 0 16px 16px;
  justify-content: center;
  @media${devices.laptop} {
      position: relative;
      align-items: center;
      justify-content: end;
  }
`

export const HotelResultStyled = {
    HotelContentImageContainer,
    HotelContent,
    HotelFooter
}
