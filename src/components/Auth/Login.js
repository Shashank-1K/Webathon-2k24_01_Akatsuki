import React from 'react'
import { NavLink } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../../firebaseConfig'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
// import loginPic from '../../images/Login.svg'
import loginPic from '../images/Login.svg'
import './Login.css'
function Login() {
  const navigate = useNavigate()
  let { register, handleSubmit} = useForm()
  const submitLogin = (data) => {
    console.log(data)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userdata) => {
        console.log(userdata?.user)
        console.log(auth?.currentUser)
        window.localStorage.setItem("currentuser", JSON.stringify(auth?.currentUser))
        auth?.currentUser?.getIdToken()
          .then((tokenID) => {
            console.log(tokenID)
            window.localStorage.setItem("token", tokenID)
            navigate('/profile')
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => { console.log(auth) })
      .catch((err) => { console.log(err) })
  }

  return (
    <div className='row pt-5 mx-auto'>
      <img src={loginPic} className='col col-12 col-sm-6 col-lg-7 loginImg' alt="login"></img>
      <div className='col col-11 col-sm-8 col-md-6 col-lg-4 mx-auto loginForm'>
        <form className='form border border-black p-4 shadow mt-5 rounded' onSubmit={handleSubmit(submitLogin)}>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" {...register('email')} required />
            <label>Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password" {...register('password')} required />
            <label >Password</label>
          </div>
          <button className='btn btn-dark d-block mx-auto mt-5 px-4 ' type='submit' >Login</button>
          <NavLink><FcGoogle onClick={signInWithGoogle} className='d-block mx-auto mt-4 display-6 rounded-circle border p-1' /></NavLink>
        </form>
      </div>
    </div>
  )
}

export default Login