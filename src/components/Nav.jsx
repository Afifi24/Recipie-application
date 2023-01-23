import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <Navstyle>
      <nav>
      <div className="logo">EDMAM</div>
      <div className="search">
        <input type="text" placeholder='Search...' />
      </div>
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
height: 5rem;
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
  
}

/* =====MEDIA QUERIES===== */

@media screen and (max-width:800px) {
  .sign{
    display: none;
  }
}
@media screen and (max-width:600px) {
  .search{
    width: 10rem;
  }
}
`