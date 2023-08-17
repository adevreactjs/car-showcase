'use client'
import {FC} from "react";
import {CarProps} from "@/types";

interface CarCardProps {
    car: CarProps
}
const CarCard:FC<CarCardProps> = ({car}) => {
    return (
        <div className='car-card group'>
            {car.model}
        </div>
    );
};

export default CarCard;