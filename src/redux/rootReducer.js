import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import appReducer from './Slices/App'

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    // WhiteList:[]
    // BlackList:[]
}

const rootReducer = combineReducers({
    app: appReducer,
});

export{
    rootPersistConfig,
    rootReducer
};