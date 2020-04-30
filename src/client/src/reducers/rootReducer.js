import { combineReducers } from 'redux';

import user   from './userReducer';
import menu   from './menuReducer';
import code   from './codeReducer';
import save   from './saveReducer';
import load   from './loadReducer';
import canvas from './canvasReducer';
import imp from './importReducer';

const rootReducer = combineReducers({
  user: user,
  menu: menu,
  code: code,
  save: save,
  load: load,
  canvas: canvas,
  import: imp,
});

export default rootReducer;
