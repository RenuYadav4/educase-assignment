import React from 'react'
import '../Pages/Styles/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='main-container'>
            <div className="mobile-container">
                <div className="inner-container">
                    <h1>Welcome to PopX</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,</p>
                    <div className='button-container'>
                        <button className='create' onClick={()=>navigate("/create")}>Create Account</button>
                        <button className='login' onClick={()=>navigate("/login")}>Already Registered? Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home