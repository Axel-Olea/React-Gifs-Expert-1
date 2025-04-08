import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories ]);
        // setCategories(cat => [...cat, 'Valorant']);
    };

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
       <AddCategory 
            //setCategories={setCategories}
            onNewCategory={value => onAddCategory(value)}
            currentCategories={ categories }
       />

        {/* Listado de Gifs */}
    
        {
        categories.map(category => {
            return (
                <GifGrid 
                    key={category}  
                    category={category} 
                />
            )
        })
        }
        

    </>
  )
}
