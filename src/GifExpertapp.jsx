import { useState } from "react";
import { AddCategory, GitGrid } from "./components";

export const GifExpertapp = () => {

    const [ categories, setCategories ] = useState([ 'One Puch' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        //categories.push(newCategory);
        setCategories( [ newCategory, ...categories  ] );
        //setCategories([ ...categories, 'Valorant' ])
    }

    return (
        <>

        <h1>GifExpertapp</h1>


        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />



        {
            categories.map( ( category ) => (
                <GitGrid 
                    key={ category } 
                    category={ category } />
            ))
        }



        </>
    )
}
