import React, { useState,useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images,setImages] = useState([]);

    useEffect(()=>{
        getGifs();
    },[])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Pokemon&api_key=fKDA0Yv7toq28ACZ4p3HXRTvhl8W0DxT&limit=10';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url 
            }

        })
        setImages(gifs);
    }

    return (
    <div className='card-grid'>
        <h3>{category}</h3>
        <hr/>
            {
                images.map(img=>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                        
                    />
                ))
            }
    </div>
  )
}

