import React,{useState,useEffect} from 'react'
import RecipeItem from './Recipeitem'
import styled from 'styled-components';
function Reecipe({Recipe}) {
 
 
  return (
   
    <Appstyle>
   
           {Recipe.map(recipe=>{
               return(
                   <div key={recipe.recipe.image}  className='container' >
                    <RecipeItem recipe={recipe}/>
                   </div >
               ) 
           })} 
       
    </Appstyle>
   
  );
}

export default Reecipe;

const Appstyle = styled.div`
width: var(--container-width-lg);
margin: auto;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
gap: 2rem;
padding: 12rem 0rem;
/* =====MEDIA QUERIES===== */

@media screen and (max-width:1024px) {
  width: var(--container-width-md);
}

`