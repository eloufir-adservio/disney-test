import Room from './Room';
import {useAppSelector} from '../../../app/hooks';
import {selectRooms, selectRoomsIsLoading, selectSelectedRoom} from '../bookingSlice';
import RightContent from './RightContent';

const RoomSelection = () => {
    const selectedRoom = useAppSelector(selectSelectedRoom);
    const rooms = useAppSelector(selectRooms);
    const roomsIsLoading = useAppSelector(selectRoomsIsLoading);

    return <>
        {roomsIsLoading && <div className={'text-center p-2'}>Loading...</div>}

        <div className={'grid grid-cols-1 lg:grid-cols-12 gap-3'}>
            <div className={'lg:col-span-9 space-y-5'}>
                {rooms && <div className={'text-xl font-extrabold'}>Your room selection</div>}
                {
                    rooms && rooms.map(room => {
                        return <Room key={room.room_code} room={room} selected={selectedRoom?.room_code === room.room_code}/>
                    })
                }
            </div>
            <div className={'lg:col-span-3 space-y-5'}>
                <RightContent/>
            </div>
        </div>
    </>

}

export default RoomSelection
