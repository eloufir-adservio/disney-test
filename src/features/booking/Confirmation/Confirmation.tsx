import {IoCheckmarkCircleOutline} from '@react-icons/all-files/io5/IoCheckmarkCircleOutline'
const Confirmation = () => {
    return <div className={'p-12 shadow-sm bg-white rounded-2xl flex flex-col items-center justify-center'}>
        <IoCheckmarkCircleOutline className={'w-14 h-14  text-blue-700'}/>
        <div className={'text-2xl font-bold'}>Message de confirmation</div>
    </div>
}

export default Confirmation
