import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // Llamamos al custom hook y hacemos la desestructuracion de los datos
    const {data,loading} = useFetchGif(category);

  return (
    <>
        <h3>{category}</h3>
        {/* Hacemos una validacion para desplegar el loading en lo que carga la información */}
        {loading && <h4>Loading...</h4>}
        <div className='card-grid'>
            
            { 
                //mapeamos o recorremos la data para sacar la informacion del arreglo
                data.map( img => 
                  
                    <GifGridItem 
                    key={img.id}
                    {...img}
                    />
                    ) 
            }
            

        </div> 
    </>
  )
}
