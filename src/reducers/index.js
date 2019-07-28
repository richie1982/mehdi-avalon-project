import { combineReducers } from 'redux'

const dataReducer = (state = null, action) => {
    switch(action.type) {
        case "GET_DATA":
            return state = action.payload 
        default:
            return state
    }
}

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer