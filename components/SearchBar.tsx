'use client';
import SearchManufacturer from '@/components/SearchManufacturer';
import Image from 'next/image';
import { useState } from 'react';

const SearchButton = ({ othersClasses }: { othersClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${othersClasses} relative`}>
    <Image
      src='/magnifying-glass.svg'
      alt='search'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton othersClasses='' />
      </div>
    </form>
  );
};

export default SearchBar;
