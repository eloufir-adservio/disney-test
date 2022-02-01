import Wizard from './common/Wizard/Wizard';
import {useAppSelector} from './app/hooks';
import {selectStep, selectSteps} from './features/booking/bookingSlice';

const Home = () => {
    const step = useAppSelector(selectStep);
    const steps = useAppSelector(selectSteps);
    return <div className={'flex flex-col'}>
        <Wizard items={steps} active={step}/>
    </div>
}

export default Home
