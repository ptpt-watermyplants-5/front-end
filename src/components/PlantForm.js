import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialForm = {
    nickname: "",
    species: "",
    h20_frequency: "",
    image_url: "(optional)",
}

const PlantForm = () => {
    const uid = Number(document.location.pathname[10]);

    const params = useParams();

    console.log("Params", params)

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
        axiosWithAuth().post(`/user/${uid}/plants`, formValues)
            .then(res => {
                console.log(res)
                push(`/myplants/${uid}`)
            })
            .catch(err => console.log(err.response))
    }

    return(

        <div className="add-plant">

            <h2>Let's Add A New Plant!</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nickname">Nickname:</label>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    value={formValues.nickname}
                    onChange={handleChange}
                />

                <br />
                
                <label htmlFor="species">species:</label>
                <input
                    type="text"
                    id="species"
                    name="species"
                    value={formValues.species}
                    onChange={handleChange}
                />

                <br />
                
                <label htmlFor="h20_frequency">h20_frequency:</label>
                <input
                    type="text"
                    id="h20_frequency"
                    name="h20_frequency"
                    value={formValues.h20_frequency}
                    onChange={handleChange}
                />

                <br />
                
                <label htmlFor="image_url">image_url:</label>
                <input
                    type="text"
                    id="image_url"
                    name="image_url"
                    value={formValues.image_url}
                    onChange={handleChange}
                />

                <br />

            

                <button type="submit">Add</button>
                
            </form>
        </div>
    )
}

export default PlantForm;