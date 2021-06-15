import { combineReducers } from 'redux';

import user from './user';
import repos from './repos';
import followers from './followers';
import following from './following';

const rootReducers = combineReducers({ user, repos, followers, following });

export default rootReducers;