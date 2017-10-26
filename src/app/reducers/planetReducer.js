const initialState = {
    searchTextPlanet: "",
    planets: [
        {
            id: 1,
            name: "Mercury",
            size: 12
        }, {
            id: 2,
            name: "Venus",
            size: 14
        }, {
            id: 3,
            name: "Earth",
            size: 16
        }, {
            id: 4,
            name: "Mars",
            size: 18
        }, {
            id: 5,
            name: "Jupiter",
            size: 20
        }, {
            id: 6,
            name: "Saturn",
            size: 22
        }, {
            id: 7,
            name: "Uranus",
            size: 24
        }, {
            id: 8,
            name: "Neptune",
            size: 26
        }, {
            id: 9,
            name: "Pluto",
            size: 28
        }
    ]
}

const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            state = {
                ...state,
                searchTextPlanet: action.payload,
                planets: initialState
                    .planets
                    .filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
            break
        default:
            break
    }
    return state
}

export default planetReducer;