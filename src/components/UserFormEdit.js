import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions';

const UserFormEdit = (props) => {

    const { user, editUser, errors } = props;

    const [ formValues, setformValues ] = useState({
        username: user.username,
        password: '',
        password2: '',
        phone_number: user.phone_number,
    })

    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formValues.phone_number = Number(formValues.phone_number);
        editUser(user.user_id, formValues);
    }

    return(

        <div className="edit-user">

            <h2>Update Your User Info!</h2>

            {errors !== null ? <p className="error">{errors}</p> : undefined}
            <form onSubmit={handleSubmit}>
                <label htmlFor="nickname">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                />

                <br />
                
                <label htmlFor="species">phone_number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phone_number"
                    value={formValues.phone_number}
                    onChange={handleChange}
                />
                
                <br />
                
                <label htmlFor="species">password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                
                <br />

                <label htmlFor="species">newPassword:</label>
                <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={formValues.password2}
                    placeholder="optional"
                    onChange={handleChange}
                />

                <button type="submit">done</button>
                
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {

    return({
        user: state.user,
    })
}

export default connect(mapStateToProps, {editUser})(UserFormEdit);
