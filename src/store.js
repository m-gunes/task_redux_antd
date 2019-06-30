import { createStore, combineReducers } from 'redux';
import post from './reducers/post';
import user from './reducers/user';

const reducer = combineReducers({
    post,
    user
});

export default createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)