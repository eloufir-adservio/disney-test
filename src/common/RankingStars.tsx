import {AiFillStar} from '@react-icons/all-files/ai/AiFillStar';

type RankingStarsProps = {
    rank: number
    className?: string
}
const RankingStars = ({rank, className}: RankingStarsProps) => {
    return <div className={'flex space-x-0.5'}>
        {
            [...Array(rank)].map((_, i) => <AiFillStar key={i} className={`${className ?? ''} w-3 h-3`}/>)
        }
    </div>
}

export default RankingStars
