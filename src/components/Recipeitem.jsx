import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
const Recipeitem = ({recipe}) => {
  return (
    <Recipestyle>
      <h2>{recipe.recipe.label}</h2>
      <div className="image">
        <img src={recipe.recipe.image} alt="" />
      </div>
    </Recipestyle>
  )
}

export default Recipeitem

const Recipestyle = styled.div`
background-color:var(--card-background);
color: var(--color-light);
border: 2px solid transparent;
padding: 1rem;
border-radius: 2rem 0rem;
transition:var(--transition);
cursor: pointer;
&:hover{
  border-color: #c0bdbd;
  background-color: transparent;
  transform: scale(1.1);
  h2{
    color: var(--color-secondary);
  }
}
.image{
overflow: hidden;
 
img{
  border-radius: 1.5rem 0rem;
  width: 100%;
}
}
h2{
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
 
}
/* ====MEDIA QUERIES==== */
@media screen and (max-width:600px) {
  &:hover{
    transform: unset;
  }
}
`