import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = ({HandelInput,search,Getsearch}) => {
  return (
    <Navstyle>
      <nav>
      <div className="logo"><Link to='/'>EDMAM</Link></div>
      <form onSubmit={Getsearch} className="search">
        <input value={search} onChange={HandelInput} type="text" placeholder='Search...' />
      </form>
      <div className="sign">
      <div className="signin"><Link to='/sign-in'>Sign In</Link></div>
      <div className="signup"><Link to='/sign-up'>Sign Up</Link></div>
      </div>
      </nav>
    </Navstyle>
  )
}

export default Nav

const Navstyle = styled.div`
min-height: 5rem;
background-color: var(--color-blue);
position: fixed;
top: 0;
left: 0;
right: 0;
color: var(--color-light);
z-index: 99;
nav{
    width: var(--container-width-lg);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.4rem;
}
.sign{
    display: flex;
    align-items: center;
    gap: 2rem;
}
.logo{
    background: linear-gradient(to left, var(--color-secondary),var(   --color-light));
    -webkit-text-fill-color:transparent;
    -webkit-background-clip: text;
    font-weight: 700;
    font-size: 1.1rem;
}
.search {
    width: 20rem;
    input{
        width: 100%;
        height: 2.3rem;
        padding: 0rem 1rem;
        border: none;
        outline: none;
        border-radius: 1.5rem;
    }
}
.signup, .signin{
   font-weight: 600;
   font-size: 0.8rem;
   background-color: var(--color-secondary);
   width: 6rem;
   height: 2rem;
   display: grid;
   place-items: center;
   border-radius: 1rem;
   /* padding: 1rem; */

  
}

/* =====MEDIA QUERIES===== */

@media screen and (max-width:800px) {
  .sign{
    gap: 0.5rem;
  }
  .search{
    width: 10rem;
  }
}
@media screen and (max-width:600px) {
 nav{
  flex-direction: column;
  gap:1rem;
  padding-bottom: 0.8rem;
 }
 .signup, .signin{
  width: 5rem;
  gap: 1rem;
 }
}
`