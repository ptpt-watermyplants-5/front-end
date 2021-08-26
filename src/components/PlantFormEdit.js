import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlants } from '../actions';


const PlantFormEdit = (props) => {
    const plantParam = useParams();
    const pid = Number(plantParam.id);
    const [plant] = props.plantsList.filter(plant => plant.id === pid)

    const initialForm = {
        nickname: plant.nickname,
        species: plant.species,
        h20_frequency: plant.h20Frequency,
        image_url: plant.image,
    }

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
        push(`/myplants${localStorage.getItem('uid')}`);
    }

    return(

        <div className="edit-plant">

            <h2>Let's Edit A New Plant!</h2>

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

            

                <button type="submit">done</button>
                
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {

    return({
        plantsList: state.plantsList,
    })
}

export default connect(mapStateToProps, {getPlants})(PlantFormEdit);
