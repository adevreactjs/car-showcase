import { CarProps, FiltersProps } from '@/types';
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';

export const fetchCars = async (filters: FiltersProps) => {
  const { manufacturer, year, model, limit, fuel } = filters;

  const header = {
    'X-Api-Key': 'pdr0Mue0amTFZBvBVv6y4w==nEU75u58ujNCTdBC',
  };
  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuil_type=${fuel}`,
    { headers: header },
  );
  const result = await response.json();
  return result;
};
