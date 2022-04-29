import { createStore } from 'redux';
import rootReducer from './reducer/root.reducer';

const store = createStore(rootReducer)


export default store;