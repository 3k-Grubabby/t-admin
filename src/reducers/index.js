import isLogger from './isLogger'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    isLogged : isLogger
})

export default allReducers;
