import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Pages/Styles/Userprofile.css'

const Userprofile = () => {
    const location = useLocation();
    const formData = location.state || {};
    return (
        <div className="main-container">
            <div className="mobile-container">
                <div className="top">
                    Account Settings
                </div>
                <div className="profile">
                    <div className="image">
                        <img src="src\assets\profile.png" alt="" />
                    </div>
                    <div className="about">
                        <p className='name'>{formData.name || "User Name"}</p>
                        <p>{formData.email || "user@example.com"}</p>
                    </div>
                </div>
                <p className='description'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadispscing
                    Elits, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                    Labore Et Dolor Magna Aliquyam Erat, Sed Diam
                </p>
                <hr />
                <hr className='bottom' />
            </div>
        </div>
    )
}

export default Userprofile