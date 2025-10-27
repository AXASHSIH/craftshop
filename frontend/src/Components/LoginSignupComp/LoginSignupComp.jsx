import React, {useState} from 'react'
import './LoginSignupComp.css'

function LoginSignupComp() {
    const [isLogin, SetIsLogin] = React.useState(true);
  return (
    <>
    <div className='login-body'>
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active':""} onClick={() => SetIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active':""} onClick={() => SetIsLogin(false)}>Sign Up</button>
                </div>
                {isLogin ? <>
                    <div className="form">
                        <h2>Login Form</h2>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />   
                            <a href="#">Forgot Password?</a>
                            <button type="submit">Login</button>
                            <p>Not a Membr? <a href="#" onClick={() => SetIsLogin(false)}>Signup now</a></p>
                    </div>
                           </> :<>
                            <div className="form">
                                <h2>Signup Form</h2>
                                <input type="text" placeholder='Enter your Name'required/>
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />                  
                                <button type="submit">Signup</button>
                           </div>
                           </> 
                           }
            </div>

        </div>
    </div>    
    </>
  )
}

export default LoginSignupComp