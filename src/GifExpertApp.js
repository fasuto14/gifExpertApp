import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);
    // const handleAdd = () => {
    //     //setCategories([...categories,'Pokemon']) //Tmb sirve!
    //     setCategories(cats=>[...cats,'Pokemon']);
    // }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory/>
            <hr/>
            <ol>
                {
                    categories.map((category,i) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp;