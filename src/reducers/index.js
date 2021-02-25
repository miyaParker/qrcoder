import urlReducer from './handleChangeReducer'
import formReducer from './formReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    imageSource: urlReducer,
    form :formReducer
})
export default rootReducer