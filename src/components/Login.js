import React, { useState } from 'react';

const initialForm = {
    username: "",
    password: "",
}

const Login = () => {

    const [ formValues, setformValues ] = useState(initialForm)

    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(

        <div>

            <h2>Welcome to WaterMyPlants!</h2>
            <h4>Please login to view your plants.</h4>

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
            <button>Sign up!</button>

        </div>
    )

}

export default Login;