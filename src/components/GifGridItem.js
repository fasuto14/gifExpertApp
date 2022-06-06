import React from 'react'

export const GifGridItem = ({title,url}) => {
    //console.log(id,title,url)
  return (
    <div className='card animate_animated animate_bounce animate__bounceIn'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
