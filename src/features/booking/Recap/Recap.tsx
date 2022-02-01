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
import {IoIosBed} from '@react-icons/all-files/io/IoIosBed';
import NumberFormat from 'react-number-format';
import Input from '../../../common/Elements/Input';
import {CommonStyled} from '../../../common/common.styled';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RankingStars from '../../../common/RankingStars';

const Recap = () => {
    const hotel = useAppSelector(selectSelectedHotel);
    const selectedRoom = useAppSelector(selectSelectedRoom);
    const arrivalDate = useAppSelector(selectArrivalDate);
    const departureDate = useAppSelector(selectDepartureDate);
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: any) => {
        dispatch(nexStep())
    }


    return <div className={'p-12 shadow-sm bg-white rounded-2xl flex flex-col items-center justify-center'}>
        <div className={'grid grid-cols-12 gap-10 divide-x divide-gray-100'}>
            <div className={'col-span-4'}>
                <h1 className={'text-2xl font-extrabold mb-2'}>Recap</h1>
                <div className={'grid-cols-2 grid bg-gray-50 rounded-md  divide-x divide-gray-200 shadow mb-5'}>
                    <div className={'col-span-1 px-6 py-1'}>
                        <Moment className={'font-bold block'} format='dddd'>{moment(arrivalDate)}</Moment>
                        <Moment className={'text-xs font-bold'} format='D MMM yyyy'>{moment(arrivalDate)}</Moment>
                    </div>
                    <div className={'col-span-1 px-6 py-1'}>
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

                <div className={'mt-6 flex items-center space-x-2'}>
                    <div className={'font-bold'}>TOTAL AMOUNT: </div>
                    <NumberFormat className={'font-bold text-lg'} value={selectedRoom!.room_price / 100} displayType="text" thousandSeparator={true} prefix="£" suffix={"*"} decimalScale={2} />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={'col-span-8 pl-10 grid grid-cols-2 gap-x-5'}>
                <div className={'col-span-1'}>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                        First name
                    </label>
                    <div className="mt-1">
                        <Input type="text" id={'first_name'} inputRegister={register('first_name')}/>
                    </div>
                </div>
                <div className={'col-span-1'}>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                        Last name
                    </label>
                    <div className="mt-1">
                        <Input type="text" id={'last_name'} inputRegister={register('last_name')}/>
                    </div>
                </div>
                <div className={'col-span-2'}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <Input type="email" id={'email'} inputRegister={register('email')} error={errors.email?.message ? errors.email.message : undefined}/>
                    </div>
                </div>
                <div className={'col-span-2'}>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <div className="mt-1">
                        <Input type="text" id={'address'} inputRegister={register('address')}/>
                    </div>
                </div>
                <div className={'col-span-2'}>
                    <CommonStyled.Button type={'submit'}>Submit</CommonStyled.Button>
                </div>
            </form>
        </div>
    </div>
}

const validationSchema = Yup.object().shape({
    first_name: Yup.string()
        .optional(),
    last_name: Yup.string()
        .optional(),
    address: Yup.string()
        .optional(),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
});

export default Recap;
