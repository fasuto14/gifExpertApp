import React, { useState,useEffect } from 'react'

export const GifGrid = ({category}) => {
    const [count,setCount] = useState(0);
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
        console.log(gifs);
    }

    return (
    <>
        <h3>{category}</h3>
        <h2>{count}</h2>
        <button onClick={()=> {setCount(count+1)}}>Count</button>
    </>
  )
}
