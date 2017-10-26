import React from 'react';
import {connect} from 'react-redux';
import {setSearch} from '../actions/planetAction'

class SearchBox extends React.Component {
    render() {
        return (
            <form>
                <input
                    type="text" autoFocus
                    onChange={(event) => this.props.search(event.target.value)}
                    placeholder="Search Planet Here"/>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {planets: state.planetReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (text) => {
                dispatch(setSearch(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)