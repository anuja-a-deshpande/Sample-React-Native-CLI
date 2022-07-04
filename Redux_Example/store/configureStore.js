import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers({count: countReducer});
const configureStoreFun = () => {
  return createStore(rootReducer);
};
export default configureStoreFun;
