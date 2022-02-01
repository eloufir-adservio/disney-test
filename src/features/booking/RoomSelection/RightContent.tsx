import {IoIosBed} from '@react-icons/all-files/io/IoIosBed';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {
    nexStep,
    selectArrivalDate,
    selectDepartureDate,
    selectSelectedHotel,
    selectSelectedRoom
} from '../bookingSlice';
import Moment from 'react-moment';
import moment from 'moment';
import {CommonStyled} from '../../../common/common.styled';
import NumberFormat from 'react-number-format';
import RankingStars from '../../../common/RankingStars';

const RightContent = () => {
    const hotel = useAppSelector(selectSelectedHotel);
    const selectedRoom = useAppSelector(selectSelectedRoom);
    const arrivalDate = useAppSelector(selectArrivalDate);
    const departureDate = useAppSelector(selectDepartureDate);
    const dispatch = useAppDispatch();

    return selectedRoom ? <>
        <div className={'text-xl font-extrabold'}>Your Selection</div>
        <div className={'bg-black bg-opacity-5 rounded-md w-full p-4'}>
            <div className={'grid-cols-2 grid bg-white rounded-md  divide-x divide-gray-100 shadow mb-5'}>
                <div className={'col-span-1 px-2 py-1'}>
                    <Moment className={'font-bold block'} format='dddd'>{moment(arrivalDate)}</Moment>
                    <Moment className={'text-xs font-bold'} format='D MMM yyyy'>{moment(arrivalDate)}</Moment>
                </div>
                <div className={'col-span-1 px-2 py-1'}>
                    <Moment className={'font-bold block'} format='dddd'>{moment(departureDate)}</Moment>
                    <Moment className={'text-xs font-bold'} format='D MMM yyyy'>{moment(departureDate)}</Moment>
                </div>
            </div>

            <RankingStars rank={5} className={'w-2 h-2'}/>
            <h3 className={'font-bold text-lg'}>{hotel?.hotel_name}</h3>
            <div className={'font-medium text-xs mb-2'}>{selectedRoom?.room_name}</div>
            {
                (selectedRoom?.room_description ?? []).map((desc, i) => {
                    return <p key={`desc-${i}`} className={'text-xs text-gray-800'}>{desc}</p>
                })
            }
            <div className={'flex items-center py-2'}>
                <IoIosBed className={'text-violet-700 w-5 h-5 mr-1'}/> <span className={'text-xs font-bold'}>{moment(departureDate).diff(moment(arrivalDate), 'days')} nights</span>
            </div>
            <div className={'my-6 flex items-center space-x-2'}>
                <div className={'font-bold'}>TOTAL AMOUNT: </div>
                <NumberFormat className={'font-bold text-lg'} value={selectedRoom!.room_price / 100} displayType="text" thousandSeparator={true} prefix="£" suffix={"*"} decimalScale={2} />
            </div>
            <CommonStyled.Button
                onClick={() => {
                    dispatch(nexStep())
                }}
                className={'w-full'}>Next</CommonStyled.Button>
        </div>
    </> : null
}

export default RightContent
