
import {combineReducers} from 'redux';
import User from './user';
import Login from './login';
import Task from './task';
import ActionTask from './actionTask';

export default combineReducers({
    User,
    Login,
    Task,
    ActionTask
});