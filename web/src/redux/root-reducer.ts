import { combineReducers } from 'redux'
import equipeReducer from './equipe/reducer'

const rootReducer = combineReducers({equipeReducer})

export default rootReducer