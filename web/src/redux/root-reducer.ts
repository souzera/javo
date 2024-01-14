import { combineReducers } from 'redux'
import equipeReducer from './equipe/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({equipeReducer, userReducer})

export default rootReducer