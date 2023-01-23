import React,{useState,useEffect} from 'react'
import RecipeItem from './components/Recipeitem'
import styled from 'styled-components'
import { Globalstyle } from './Globalstyles'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Signup from './components/SignUp'
import Signin from './components/SignIn'
import Nav from './components/Nav'
function App() {
  const[query,setQuery] = useState('chicken')
  const [Recipe,setRecipes] =  useState([])
  const APP_ID = '2e1d1e93'
  const APP_key ='0c3edcb0fad0e00bf69193dd2252fb00'
  const API_URL =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`
  console.log(Recipe)
  const RequsetRecipie = async (url)=>{
    const data = await fetch(url)
    const recipie = await data.json()
    setRecipes(recipie.hits)
  }
  useEffect(()=>{
    RequsetRecipie(API_URL)
  },[query])
 
  return (
    <BrowserRouter>
    <Appstyle>
      <Globalstyle/>
      <Nav/>
           {Recipe.map(recipe=>{
               return(
                   <div key={recipe.image}  className='container' >
                    <RecipeItem recipe={recipe}/>
                   </div >
               ) 
           })} 
      <Routes>

            <Route path='/sign-in' element={<Signin/> }/>
            <Route path='/sign-up' element={<Signup/> }/>
            </Routes>  
    </Appstyle>
    </BrowserRouter>
  );
}

export default App;

const Appstyle = styled.div`
width: var(--container-width-lg);
margin: auto;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
gap: 2rem;
padding: 7rem 0rem;
/* =====MEDIA QUERIES===== */

@media screen and (max-width:1024px) {
  width: var(--container-width-md);
}

`