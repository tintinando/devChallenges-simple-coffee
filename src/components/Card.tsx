import { FC } from "react";
import {CardProps} from './CardContainer'
import starFillSVG from '../assets/Star_fill.svg'
import starSVG from '../assets/Star.svg'

const Card:FC<CardProps> = ({e}) => {
    return(
        <div className="relative flex flex-col gap-2" key={e.id}>
            <img className="w-[260px] h-[160px] rounded-lg" src={e.image} alt="" />
                {e.popular && (
                    <span className="absolute top-2 left-2 text-[10px] font-semibold bg-usr-badge px-2 py-1 rounded-lg">
                        Popular
                    </span>
                )}
            <div className="flex flex-row items-center justify-between mt-2">
                <h6 className="text-usr-text-primary font-semibold">{e.name}</h6>
                <span className="bg-white font-semibold px-2 py-1 rounded-md text-[12px]">{e.price}</span>
            </div>
            <div className="flex flex-row justify-start items-center gap-1 text-usr-text-primary font-semibold text-[14px]">
                <img src={e.rating ? starFillSVG : starSVG} alt="yellow star" />
                {e.rating
                    ? (<>
                        <span>{e.rating}</span>
                        <span className="text-usr-text-secondary">{`(${e.votes} votes)`}</span>
                    </>)
                
                    : (
                        <span className="text-usr-text-secondary">No ratings</span>
                    )
                }
                {!e.available &&
                    <span className="ml-auto text-usr-warning">Sold out</span>
                }
            </div>
        </div>
    )
}

export default Card