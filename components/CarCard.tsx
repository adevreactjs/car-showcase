'use client';
import { FC, useState } from 'react';
import { CarProps } from '@/types';
import Image from 'next/image';
import { CustomButton } from '.';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const carRent = calculateCarRent(car.city_mpg, car.year);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {car.make} {car.model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src='/hero.png' fill={true} alt='hero' priority className='object-contain' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={`/steering-wheel.svg`} width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] '>{car.transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={`/tire.svg`} width={20} height={20} alt='tire' />
            <p className='text-[14px] '>{car.drive.toLocaleUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={`/gas.svg`} width={20} height={20} alt='steering wheel' />
            <p className='text-[14px]'>{car.city_mpg}</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View more'
            containerStyle='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bolt'
            rightIcon='/right-arrow.svg'
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
