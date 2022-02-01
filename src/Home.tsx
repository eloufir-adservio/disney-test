import Wizard from './common/Wizard/Wizard';
import {useAppSelector} from './app/hooks';
import {selectStep, selectSteps} from './features/booking/bookingSlice';
import SearchPanel from './features/booking/SearchPanel/SearchPanel';
import HotelResult from './features/booking/HotelsResult/HotelResult';
import RoomSelection from './features/booking/RoomSelection/RoomSelection';
import Recap from './features/booking/Recap/Recap';

const Home = () => {
    const step = useAppSelector(selectStep);
    const steps = useAppSelector(selectSteps);
    return <div className={'flex flex-col space-y-5'}>
        <Wizard items={steps} active={step}/>
        {step < 2 && <SearchPanel/>}
        {step === 0 && <HotelResult/>}
        {step === 1 && <RoomSelection/>}
        {step === 2 && <Recap/>}
    </div>
}

export default Home
