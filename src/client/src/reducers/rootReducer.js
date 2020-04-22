import { combineReducers } from 'redux';

import user from './userReducer';
import menu from './menuReducer';
import code from './codeReducer';

const rootReducer = combineReducers({
  user: user,
  menu: menu,
  code: code,
});

export default rootReducer;
