import React, { useState,useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    const [images,setImages] = useState([]);

    useEffect(()=>{
        getGifs(category)
        .then(imgs => setImages(imgs))
    },[category])

    return (
    <div >
        <h2>{category}</h2>
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

