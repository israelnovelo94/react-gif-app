import { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    const [first, setfirst] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        // setTimeout(() => {
            getGift(category).then( img => {
                setfirst({
                    data: img,
                    loading: false
                });
            }); 
        // }, 3000);
    }, [category]);
    return first;
}
