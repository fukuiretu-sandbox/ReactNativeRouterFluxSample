import { combineReducers } from 'redux';
import routes from './routes';
import counter from './counter';

export default combineReducers({
  routes,
  counter,
  // ... other reducers
});
