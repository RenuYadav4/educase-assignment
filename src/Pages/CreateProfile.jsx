import React, { useState } from 'react'
import '../Pages/Styles/create.css'
import { useNavigate } from 'react-router-dom'

const CreateProfile = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "", company: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/userprofile", { state: formData });
    };

    return (
        <div className='main-container'>
            <div className="mobile-container">
                <div className="form-container">
                    <div className="heading">
                        <h2>Create your PopX account</h2>
                    </div>
                    <form className='create-form' onSubmit={handleSubmit}>
                        <div className='input-container'>
                            <input
                                type="text"
                                name="name"
                                placeholder=""
                                onChange={handleChange}
                                required
                                className='input-field'
                            />
                            <label className='input-label'>Full Name</label>
                        </div>
                        <div className='input-container'>
                            <input
                                type="tel"
                                name="phone"
                                placeholder=""
                                onChange={handleChange}
                                required
                                className='input-field' />
                            <label className='input-label'>Phone number</label>
                        </div>
                        <div className='input-container'>
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                onChange={handleChange}
                                required
                                className='input-field' />
                            <label className='input-label'>Email address</label>
                        </div>
                        <div className='input-container'>
                            <input
                                type="password"
                                name="password"
                                placeholder=""
                                onChange={handleChange}
                                required
                                className='input-field' />
                            <label className='input-label'>Password</label>
                        </div>
                        <div className='input-container'>
                            <input
                                type="text"
                                name="company name"
                                placeholder=""
                                onChange={handleChange}
                                className='input-field' />
                            <label className='input-label'>Company name</label>
                        </div>
                        <div className="radio-group">
                            <label>Are you an agency?</label>
                            <div className="options">
                                <div>
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="yes"
                                        onChange={handleChange}
                                        required
                                        className='radio-drop'
                                    />
                                    <label >Yes</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="no"
                                        onChange={handleChange}
                                        required
                                        className='radio-drop'
                                    />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                        <button className='submit-btn' type='submit'>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile