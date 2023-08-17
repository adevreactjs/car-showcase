'use client'
import {FC} from "react";
import {CarProps} from "@/types";

interface CarCardProps {
    car: CarProps
}

const CarCard: FC<CarCardProps> = ({car}) => {
    const calculateCarRent = (city_mpg: number, year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age

        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;

        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

        return rentalRatePerDay.toFixed(0);
    };

    const carRent = calculateCarRent(car.city_mpg, car.year)

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>{car.make} {car.model}</h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>



        </div>


    );
};

export default CarCard;