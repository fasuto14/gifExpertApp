import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories,setCategories] = useState(['Pokemon']);
    // const handleAdd = () => {
    //     //setCategories([...categories,'Pokemon']) //Tmb sirve!
    //     setCategories(cats=>[...cats,'Pokemon']);
    // }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol className='list'>
                {
                    categories.map((category) => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp;