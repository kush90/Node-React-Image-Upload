import {LOGIN_USER,LOGOUT_USER} from '../actions/actionType';

const Login = (state=null,action)=>{
    switch(action.type){
        case LOGIN_USER:
            state = action.user;
            localStorage.setItem('token',action.user.token);
            return state;
        case LOGOUT_USER:
             state=action.user;
             localStorage.removeItem('token',true);
             return state;
        default:
            return state;

    }
}
export default Login;