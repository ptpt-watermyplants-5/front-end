import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialForm = {
    username: "",
    password: "",
}

const Login = () => {

    const [ formValues, setFormValues ] = useState(initialForm)

    const { push } = useHistory();

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/auth/login', formValues)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                setFormValues(initialForm)
                push(`/${formValues.username}/plants`)
            })
            .catch(err => console.log(err))
    }

    return(

        <div>

            {/* <h2>Welcome to WaterMyPlants!</h2>
            <h4>Please login to view your plants.</h4> */}

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

                <button type="submit">Login</button>
                
            </form>

            <br />
            <br />

            <h5>Not a Member?</h5>
            <Link to="/signup">Sign Up!</Link>

        </div>
    )

}

export default Login;