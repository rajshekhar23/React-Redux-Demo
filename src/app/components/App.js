import React from 'react'
import Planets from './planets'
import SearchBox from './searchbox'

require('../index.css')
class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="titleHeader">LIST OF PLANETS</h1>
                <SearchBox />
                <Planets/>
            </div>
        )
    }
}

export default App;