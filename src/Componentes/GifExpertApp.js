import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
    

    const [categories, setCategories] = useState(["One Punch"]);

    // const handleAdd = () => {
    //     setCategories( cats => [...cats, 'HunterxHunter']);
    // }
    return (
        <>
        <h2>Gix Expert App</h2>
        <hr />

        <AddCategory setCategories={ setCategories } />
        <ol>
        {
            categories.map( (category) => 

                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
            )
        }
        </ol>
        </>
        
        
    )
}

export default GifExpertApp;