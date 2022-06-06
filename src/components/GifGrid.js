import React from 'react'
import { GifGridItem } from './GifGridItem';
import {getGifs} from '../helpers/getGifs';
import { useFetchGifts } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    // const [images,setImages] = useState([]);
    const {data,loading} = useFetchGifts();
    console.log(data,loading);
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(imgs => setImages(imgs))
    // },[category])

    return (
    <div >
        <h2>{category}</h2>
        {loading ? 'Cargando...' : 'Data cargada'}
        {/* <div className='card-grid'>
        {
                images.map(img=>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                        
                    />
                ))
            }
        </div> */}
    </div>
  )
}

