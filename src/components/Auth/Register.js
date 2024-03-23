import React from 'react'
import { NavLink } from 'react-bootstrap';
import { useForm} from 'react-hook-form'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import { auth, db} from '../../firebaseConfig'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import registerImg from '../images/registerImg.svg'
function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const submitRegister = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userdata) => {
            console.log(userdata)
            window.localStorage.setItem("currentuser", JSON.stringify(auth?.currentUser))
            setDoc(doc(db,"users",auth?.currentUser?.uid),data)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
            auth?.currentUser?.getIdToken()
                .then((tokenID) => {
                    console.log(tokenID)
                    window.localStorage.setItem("token", tokenID)
                    navigate('/profile')
                })
                .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='row pt-5 mx-auto'>
            <img src={registerImg} className='col col-12 col-sm-6 col-lg-7 registerImg' alt="Register" />
            <div className='col col-11 col-sm-8 col-md-6 col-lg-4 mx-auto loginForm'>
                <form className='form border p-4 shadow mt-5 rounded' onSubmit={handleSubmit(submitRegister)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" placeholder="Username" {...register('username', { required: true, minLength: 6 })} />
                        <label htmlFor="username">Username</label>
                        {errors.username && <span className="text-danger">Username is required and must be at least 6 characters long</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" {...register('password', { required: true, minLength: 5 })} />
                        <label htmlFor="password">Password</label>
                        {errors.password && <span className="text-danger">Password is required and must be at least 5 characters long</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Email address" {...register('email', { required: true })} />
                        <label htmlFor="email">Email address</label>
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="age" placeholder="Age" {...register('age', { required: true, min: 1 })} />
                        <label htmlFor="age">Age</label>
                        {errors.age && <span className="text-danger">Age is required and must be a positive number</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="height" placeholder="Height (in cm)" {...register('height', { required: true, min: 1 })} />
                        <label htmlFor="height">Height (in cm)</label>
                        {errors.height && <span className="text-danger">Height is required and must be a positive number</span>}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="weight" placeholder="Weight (in kg)" {...register('weight', { required: true, min: 1 })} />
                        <label htmlFor="weight">Weight (in kg)</label>
                        {errors.weight && <span className="text-danger">Weight is required and must be a positive number</span>}
                    </div>
                    <button className='btn btn-dark d-block mx-auto mt-5 px-4' type='submit'>Register</button>
                </form>
                <FcGoogle  className='d-block mx-auto mt-4 display-6 rounded-circle border p-1' />
                <NavLink to='./login'>Already registered ?</NavLink>
            </div>
        </div>
    );
}

export default Register;
