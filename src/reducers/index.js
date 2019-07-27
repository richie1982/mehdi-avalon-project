import { combineReducers } from 'redux'

const dataReducer = (state = [], action) => {
    switch(action.type) {
        case "GET DATA":
            return [...state, ...action.payolad] 
        default:
            return state
    }
}

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer