'use client';
import { CustomButtonProps } from '@/types';
import { FC } from 'react';

const CustomButton: FC<CustomButtonProps> = ({ title, containerStyle, handleClick, btnType, textStyles, rightIcon }) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
