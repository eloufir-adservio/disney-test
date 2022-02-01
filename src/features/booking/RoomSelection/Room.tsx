import {RoomSelectionStyled} from './RoomSelection.styled';
import {CommonStyled} from '../../../common/common.styled';
import {useAppDispatch} from '../../../app/hooks';
import {selectRoom} from '../bookingSlice';
import {ApiTypes} from '../../../types';
import NumberFormat from 'react-number-format';

type RoomProps = {
    selected : boolean,
    room: ApiTypes.Room
}
const Room = ({selected, room}: RoomProps) => {
    const dispatch = useAppDispatch();
    const Button = selected ? CommonStyled.ButtonSelected : CommonStyled.Button
    return <RoomSelectionStyled.RoomContainer className={'w-full'}>
        <RoomSelectionStyled.RoomImage>
            <img className={'object-cover h-full w-full'} src={room.room_img} alt=""/>
        </RoomSelectionStyled.RoomImage>
        <RoomSelectionStyled.RoomContent $selected={selected}>

            <h3 className={'text-2xl text-gray-800 font-extrabold mb-6'}>{room?.room_name}</h3>
            {(room?.room_description ?? []).map((desc, i) => {
                return <p key={`desc-${i}`} className={'mb-1'}>{desc}</p>
            })}

            <p className={'font-bold text-gray-400 mt-2'}>Breakfast not included unless indicated otherwise</p>
        </RoomSelectionStyled.RoomContent>
        <RoomSelectionStyled.RoomPrice $selected={selected}>
            <div className={'text-gray-800 text-2xl font-extrabold'}>
                <NumberFormat value={room?.room_price / 100} displayType="text" thousandSeparator={true} prefix="£" suffix={"*"} decimalScale={2} />
            </div>
            <Button onClick={() => {
                dispatch(selectRoom(room))
            }}>Select</Button>
            {selected && <div className={'bg-violet-500 py-2 px-4 text-right font-bold text-white absolute top-0 left-0 rounded-br-2xl lg:rounded-br-none lg:rounded-bl-2xl linear-gradient-purple'}>
                Included in your package
            </div>}
        </RoomSelectionStyled.RoomPrice>
    </RoomSelectionStyled.RoomContainer>
}
export default Room
