import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PlantCard from './PlantCard';
import { getPlants, setLoggedIn, getUser } from '../actions';

const PlantList = (props) => {
    const { plantsList, getPlants, setLoggedIn, getUser } = props;

    const { id } = useParams();

    useEffect(() => {
        setLoggedIn(true);
        getUser(localStorage.getItem('uid'));
        getPlants(localStorage.getItem('uid'));
    },[getUser, setLoggedIn, getPlants])

    return(
        <div className="plant-list-container">
            <header>My Plants</header>

            <div className="plant-list">

                {plantsList.map(plant => {
                    return(
                        <PlantCard
                            key={plant.plant_id}
                            id={plant.plant_id}
                            nickname={plant.nickname}
                            h20_frequency={plant.h20_frequency}
                            species={plant.species}
                            image={plant.image_url}
                            uid={id}
                            push={useHistory}
                        />
                    )
                })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return({
        plantsList: state.plantsList,
    })
}

export default connect(mapStateToProps, {getUser, getPlants, setLoggedIn})(PlantList);