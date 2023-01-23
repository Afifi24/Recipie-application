import React from 'react'
import styled from 'styled-components'
const SignIn = () => {
  return (
    <Signinstyle>
       <form>
        <h2>Sign In</h2>
      <input type="email"  placeholder='Email...'/>
      <input type="password" placeholder='Password...' />
      <button>Sign In</button>
      </form>
    </Signinstyle>
  )
}

export default SignIn

const Signinstyle = styled.div`

padding-top: 6rem;
color: var(--color-light);
color: var(--color-light);
display: grid;
place-items: center;
height: 100vh;
form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30rem;
  height: 20rem;
  background-color: var( --color-primary-hue);
  border-radius: 1rem;
  padding: 1.5rem;
  h2{
    text-align: center;
    color: #fff;
    margin-top: -1rem;
    font-size: 1.7rem;
    text-decoration: underline;
  }
  input{
    height: 2.8rem;
    border-radius: 0.3rem;
    border: none;
    padding: 0rem 1rem;
  }
  button{
    height: 3rem;
    background-color: var(--color-secondary);
    border: none;
    cursor: pointer;
    color: var(--Global-background);
    border-radius: .5rem;
  }
}


/* === MEDIA QUERIES ==== */
@media screen and (max-width:600px) {
  form{
    width: 20rem;
  }
}
`