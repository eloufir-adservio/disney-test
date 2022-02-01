import {useEffect} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import {SearchPanelStyled} from './SearchPanel.styled';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {
    searchHotelAsync,
    selectArrivalDate,
    selectDepartureDate,
    selectSearchLoading,
    setArrivalDate,
    setDepartureDate
} from '../bookingSlice';
import moment from 'moment';

const SearchPanel = () => {

    const loading = useAppSelector(selectSearchLoading);
    const arrivalDate = useAppSelector(selectArrivalDate);
    const departureDate = useAppSelector(selectDepartureDate);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(searchHotelAsync({arrivalDate, departureDate}))
    }, [arrivalDate, departureDate])

    return <>
        <SearchPanelStyled.Container>
            <h3 className={'font-extrabold text-lg text-opacity-90 mb-4'}>Your Search</h3>
            <div className={'flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10'}>
                <div className={'flex flex-col'}>
                    <label className={'text-xs font-bold text-black'} htmlFor="arrivalDate">
                        Arrival Date
                    </label>
                    <DatePicker placeholderText={'__/__/____'}
                                className={'mt-2 px-2 py-1 rounded-md border border-gray-200 w-full lg:w-auto'}
                                id={'arrivalDate'}
                                minDate={new Date()}
                                selected={arrivalDate ? new Date(arrivalDate) : null}
                                onChange={(date) => dispatch(setArrivalDate(date ? date.getTime() : null))} />
                </div>

                <div className={'flex flex-col'}>
                    <label className={'text-xs font-bold text-black'} htmlFor="departureDate">
                        Departure date
                    </label>
                    <DatePicker placeholderText={'__/__/____'}
                                className={'mt-2 px-2 py-1 rounded-md border border-gray-200 w-full lg:w-auto'}
                                id={'departureDate'}
                                minDate={arrivalDate ? moment(arrivalDate).add(1, 'day').toDate() : new Date()}
                                selected={departureDate ? new Date(departureDate) : null}
                                onChange={(date) => dispatch(setDepartureDate(date ? date.getTime() : null))} />
                </div>
            </div>
        </SearchPanelStyled.Container>

        {loading && <div className={'text-center p-2'}>Loading...</div>}
    </>
}

export default SearchPanel
