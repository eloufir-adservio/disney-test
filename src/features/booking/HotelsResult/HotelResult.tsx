import {CommonStyled} from '../../../common/common.styled';
import {getRoomsAsync, selectHotel, selectHotels} from '../bookingSlice';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {HotelResultStyled} from './HotelResult.styled';
import RankingStars from '../../../common/RankingStars';

const HotelResult = () => {
    const hotels = useAppSelector(selectHotels);
    const dispatch = useAppDispatch();

    return <>
        {hotels.length > 0 && <h3 className={'text-lg uppercase font-extrabold'}>DISNEY HOTELS AND LES VILLAGES NATURE PARIS</h3>}
        {
            hotels.map(hotel => {
                return <div key={hotel.hotel_code} className={'w-full shadow bg-white flex flex-col rounded-[20px] overflow-hidden'}>
                    <HotelResultStyled.HotelContent>
                        <HotelResultStyled.HotelContentImageContainer>
                            <img className={'object-cover w-full'} src="https://media.disneylandparis.com/mod/b2c/en-gb/images/n015513_2020oct01_disneyland-hotel-outside_500x500_tcm827-177513.jpg?h=350&p=1" alt=""/>
                        </HotelResultStyled.HotelContentImageContainer>
                        <div className={'flex-grow p-4'}>
                            <RankingStars rank={5}/>
                            <h3 className={'text-xl font-bold'}>{hotel.hotel_name}</h3>
                            <p className={'mt-4'}>
                                {hotel.hotel_description}
                            </p>
                        </div>
                    </HotelResultStyled.HotelContent>
                    <HotelResultStyled.HotelFooter>
                        <CommonStyled.Button onClick={() => {
                            dispatch(selectHotel(hotel))
                            dispatch(getRoomsAsync(hotel))
                        }}>Check</CommonStyled.Button>
                    </HotelResultStyled.HotelFooter>
                </div>
            })
        }
    </>
}

export default HotelResult
