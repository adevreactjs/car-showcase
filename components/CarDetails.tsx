import { CarProps } from '@/types';
import { FC } from 'react';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails: FC<CarDetailsProps> = ({isOpen, closeModal, car}) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
