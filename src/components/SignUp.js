import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialForm = {
    username: "",
    password: "",
    phone_number: null,
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
        formValues.phone_number = parseInt(formValues.phone_number);
        console.log(formValues)
        axiosWithAuth().post('/auth/register', formValues)
            .then(res => {
                console.log("response", res)
                push('/login')
            })
            .catch(err => console.log(err))
    }

    return(

        <div>

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

                <label htmlFor="phone_number">Phone:</label>
                <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formValues.phone_number}
                    onChange={handleChange}
                />

                <br/>

                <button type="submit">Register</button>
                
            </form>
        </div>
    )
}

export default SignUp;