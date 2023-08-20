import {fetch} from "next/dist/compiled/@edge-runtime/primitives";

export const fetchCars = async () => {
    const cars = [
      {
        city_mpg: 23,
        class: 'compact car',
        combination_mpg: 24,
        cylinders: 4,
        displacement: 1.6,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 26,
        make: 'toyota',
        model: 'corolla',
        transmission: 'a',
        year: 1993,
      },
      {
        city_mpg: 23,
        class: 'compact car',
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.6,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 31,
        make: 'toyota',
        model: 'corolla',
        transmission: 'm',
        year: 1993,
      },
      {
        city_mpg: 23,
        class: 'compact car',
        combination_mpg: 25,
        cylinders: 4,
        displacement: 1.8,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 30,
        make: 'toyota',
        model: 'corolla',
        transmission: 'a',
        year: 1993,
      },
      {
        city_mpg: 23,
        class: 'compact car',
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.8,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 30,
        make: 'toyota',
        model: 'corolla',
        transmission: 'm',
        year: 1993,
      },
      {
        city_mpg: 23,
        class: 'small station wagon',
        combination_mpg: 25,
        cylinders: 4,
        displacement: 1.8,
        drive: 'fwd',
        fuel_type: 'gas',
        highway_mpg: 30,
        make: 'toyota',
        model: 'corolla wagon',
        transmission: 'a',
        year: 1993,
      },
    ];
    const header = {
        // 'X-Api-Key': 'pdr0Mue0amTFZBvBVv6y4w==nEU75u58ujNCTdBC'
    }
    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=corolla', {headers: header})
    const result = await response.json()
    // return result
    return cars
}

