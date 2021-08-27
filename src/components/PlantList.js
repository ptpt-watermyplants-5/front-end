import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PlantCard from './PlantCard'

const PlantList = (props) => {
    const { plantsList } = props;

    const { id } = useParams();

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

export default connect(mapStateToProps)(PlantList);