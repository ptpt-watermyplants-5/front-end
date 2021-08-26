import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { editUser } from '../actions';

const UserFormEdit = (props) => {

    const { user, editUser } = props;

    const [ formValues, setformValues ] = useState({
        username: user.username,
        phone_number: user.phone_number,
    })

    const { push } = useHistory();


    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(user.user_id, formValues);
        push(`/myplants/${user.user_id}`);
    }

    return(

        <div className="edit-plant">

            <h2>Update Your User Info!</h2>

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
