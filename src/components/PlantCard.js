import React from 'react';
import { connect } from 'react-redux';
import { deletePlant, getPlants } from '../actions';

const PlantCard = (props) => {

    const { push } = props.push();

    const handleDelete = (e) => {
        e.preventDefault();
        props.deletePlant(props.id);
        props.getPlants();
    };

    const handleEdit = (e) => {
        e.preventDefault();
        push(`/myplants/${props.uid}/plants/${props.id}`)
    };

    return(
        <div className="plant-card">
            <img src={props.image} alt="some plant"/>
            <div>
                {props.nickname}
                <br/>
                {`Species: ${props.species}`}
                <br/>
                {`h20: "${props.h20_frequency}"`}
            </div>
            <div className="plant-controls">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>

        </div>
    )
}

export default connect(null, {deletePlant, getPlants})(PlantCard);