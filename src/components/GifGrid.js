import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import {GifGridItem} from '../components/GifGridItem';

export const GifGrid = ({category}) => {
    // const [images,setImages] = useState([]);
    const {data:images,loading} = useFetchGifts(category);

    return (
    <div >
        <h2>{category}</h2>
        {loading && 'Cargando...'}

        <div className='card-grid'>
        {
                images.map(img=>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                        
                    />
                ))
            }
        </div>
    </div>
  )
}

