import React from 'react';
import {connect} from 'react-redux';
import  Planet from './planet';

class Planets extends React.Component {
    render() {
        return (
            <div className="planets">
                {this
                    .props
                    .planets
                    .planets
                    .map((planet, index) => <Planet key={index} size={planet.size}> {planet.name}</Planet>)
}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {planets: state.planetReducer}
}

export default connect(mapStateToProps)(Planets)