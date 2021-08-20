import React from 'react';
import { connect } from 'react-redux';
import PlantCard from './PlantCard'

const PlantList = (props) => {

    return(
        <div className="plant-list-container">
            My Plants

            <div className="plant-list">

                {props.plantsList.map(plant => {
                    return(
                        <PlantCard
                            key={plant.id}
                            id={plant.id}
                            nickname={plant.nickname}
                            h20Frequency={plant.h20Frequency}
                            species={plant.species}
                            image={plant.image}
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