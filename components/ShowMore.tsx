'use client';

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import CustomButton from './CustomButton';

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext, setLimit }) => {
  const router = useRouter();

  const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
  };

  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams('limit', String(newLimit));
    router.push(newPathName, { scroll: false });
    // setLimit(newLimit);
  };

  // };
  return (
    <div className='w-full flex justify-center items-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyle='bg-primary-blue rounded-full text-white'
          handleClick={handelNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
