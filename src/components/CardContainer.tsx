import { FC } from "react";
import { useFetch, Coffee } from "../hooks/useFetch";
import Card from "./Card";

export interface CardProps {
    e: Coffee
}

interface CardContainerProps {
    allProducts: boolean
}

const CardContainer:FC<CardContainerProps> = ({allProducts=true}) => {
    const data = useFetch()
    
    return(
        <>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {
                (allProducts ? data : data.filter(e=>e.available)).map((e)=>(
                    <Card key={e.id} e={e} />
                ))
            }
        </div>
        </>
    )
}

export default CardContainer