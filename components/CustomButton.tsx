'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt='rightIcon' fill={true} className='object-contain' />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
