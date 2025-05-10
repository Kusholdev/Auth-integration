import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import {Link} from 'react-router';
import { auth } from '../../firebase.init';
import { AuthContext } from '../../Contexts/AuthContext';
const Register = () => {

  const {  createUser} = use(AuthContext);
  


    const handleSubmit =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        // console.log(name,email,password); 

        createUser(email,password)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
          console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Register Now!</h1>
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" name='name' />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name='email'/>
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name='password'/>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>Already have an account? Please <Link to="/login" className='text-red-500  underline'> Login</Link></p>
            </div>
          </div>
        </div>
    );
};

export default Register;