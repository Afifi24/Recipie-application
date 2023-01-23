import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <Footerstyle>
        <div className="logo"><Link to='/'>EDMAM</Link></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae, magnam mollitia nisi ratione totam porro aut non error deleniti?</p>
        <div className="social-media">
        <Link className='social-icon'> <FaFacebookF className='icon'/></Link>
        <Link className='social-icon'> <AiOutlineTwitter  className='icon'/></Link>
        <Link className='social-icon'><AiOutlineInstagram  className='icon'/></Link>
         
         
        </div>
        <small>&copy; AFIFI BRAHIM. All the rights reserved</small>
    </Footerstyle>
  )
}

export default Footer


const Footerstyle = styled.div`
background-color: var(--color-blue);
color: var(--color-white);
min-height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.logo{
    background: linear-gradient(to left, var(--color-secondary),var(   --color-light));
    -webkit-text-fill-color:transparent;
    -webkit-background-clip: text;
    font-weight: 700;
    font-size: 1.1rem;
}
p{
    max-width: 500px;
    margin: 2rem 0rem;
    text-align: center;
}
.social-media{
    display: flex;
    gap: 2rem;
    .social-icon{
       width: 3rem;
       height: 3rem;
       background-color: var(--Global-background);
       display: grid;
       place-items: center;
       border-radius: 1rem;
       border: 1px solid transparent;
       color: #fff;
       transition: var(--transition);
       &:hover{
        background-color: transparent;
        border-color: var(--Global-background);

       }
       .icon{
        font-size: 1rem;
       }
    }
}
small{
    font-weight: lighter;
    margin-top: 2rem;
    text-align: center;
}
`