import Wizard from './common/Wizard/Wizard';
import {useAppSelector} from './app/hooks';
import {selectStep, selectSteps} from './features/booking/bookingSlice';
import SearchPanel from './features/booking/SearchPanel/SearchPanel';
import HotelResult from './features/booking/HotelsResult/HotelResult';

const Home = () => {
    const step = useAppSelector(selectStep);
    const steps = useAppSelector(selectSteps);
    return <div className={'flex flex-col space-y-5'}>
        <Wizard items={steps} active={step}/>
        {step < 2 && <SearchPanel/>}
        {step === 0 && <HotelResult/>}
    </div>
}

export default Home
