import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialForm = {
    username: "",
    password: "",
    // phoneNumber: "",
}

const SignUp = () => {

    const [ formValues, setformValues ] = useState(initialForm)

    const { push } = useHistory();

    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
        axiosWithAuth().post('/register', formValues)
            .then(res => {
                console.log(res)
                push('/login')
            })
            .catch(err => console.log(err))
    }

    return(

        <div className="register-page">

            <h2>Welcome to WaterMyPlants!</h2>
            <h4>Please register to create your account.</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                />

                <br />
                
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />

                <br />

                {/* <label htmlFor="phoneNumber">Phone:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                /> */}

                <br/>

                <button type="submit">Register</button>
                
            </form>
        </div>
    )
}

export default SignUp;