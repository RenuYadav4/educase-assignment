import React from 'react'
import '../Pages/Styles/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            <div className="mobile-container">
                <div className="login-top">
                    <h2>Signin to your PopX account</h2>
                </div>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                    </p>
                </div>
                <form className='login-form'>
                    <div className="input-container">
                        <input type="email" name="email" placeholder=""  className='input-field'/>
                        <label className='input-label'>Email Address</label>
                    </div>
                    <div className="input-container">
                        <input type="password" name="password" placeholder="" className='input-field' />
                        <label className='input-label'>Password</label>
                    </div>
                </form>
                <button className='login-only' onClick={() => navigate('/userprofile')}>Login</button>
            </div>
        </div>
    )
}

export default Login