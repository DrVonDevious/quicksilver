import { combineReducers } from 'redux';

import user from './userReducer';
import menu from './menuReducer';
import code from './codeReducer';
import save from './saveReducer';
import load from './loadReducer';

const rootReducer = combineReducers({
  user: user,
  menu: menu,
  code: code,
  save: save,
  load: load,
});

export default rootReducer;
