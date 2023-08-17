import {fetch} from "next/dist/compiled/@edge-runtime/primitives";

export const fetchCars = async () => {
    const header = {
        'X-Api-Key': 'pdr0Mue0amTFZBvBVv6y4w==nEU75u58ujNCTdBC'
    }
    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=corolla', {headers: header})
    const result = await response.json()
    return result
}

