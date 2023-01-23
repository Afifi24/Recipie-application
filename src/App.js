
import React,{useState,useEffect} from 'react'
import { Globalstyle } from './Globalstyles'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Signup from './components/SignUp'
import Signin from './components/SignIn'
import Nav from './components/Nav'
import Reecipe from './components/Recipe'
const App = () => {
  const[query,setQuery] = useState('fish')
  const [Recipe,setRecipes] =  useState([])
  const [search,setSearch] =useState('')
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
  const HandelInput = (e)=>{
    setSearch(e.target.value)
  }
  const Getsearch = (e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  return (
    <div >
      <Globalstyle/>
      <Nav  search={search} HandelInput={HandelInput} Getsearch={Getsearch}/>
      <Routes>
          <Route exact path='/sign-up' element={<Signup/>}/>
          <Route exact path='/sign-in' element={<Signin/>}/>
          <Route exact path='/' element={ <Reecipe Recipe={Recipe}/>}/>
      </Routes>
          
    </div>
  )
}

export default App
