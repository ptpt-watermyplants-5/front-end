import React from 'react';
import { connect } from 'react-redux';
import { deletePlant } from '../actions';

const PlantCard = (props) => {


    return(
        <div className="plant-card">
            <img src={props.image} alt="some plant"/>
            <div>
                {props.nickname}
                <br/>
                {`Species: ${props.species}`}
                <br/>
                {`water every ${props.h20Frequency} days`}
            </div>
            <div className="plant-controls">
                <button>Edit</button>
                <button onClick={() => {props.deletePlant(props.id)}}>Delete</button>

            </div>

        </div>
    )
}

export default connect(null, {deletePlant})(PlantCard);