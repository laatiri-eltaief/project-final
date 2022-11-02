import {/* combineReducers,  */legacy_createStore as createStore,applyMiddleware,compose} from 'redux';
/* import AutoReducer from './Reducer/AutoReducer' */
import thunk from 'redux-thunk';
import rootReducer  from './Reducer'

/* const rootReducer=combineReducers({AutoReducer}) */
export default createStore(rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
 