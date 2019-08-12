import {CREATE_USER,CLEAR_USER} from '../actions/actionType';

const User = (state=null,action)=>{
    switch(action.type){
        case CREATE_USER:
            state = action.user;
            return state;
        case CLEAR_USER:
             state = action.user;
             return state;
        default:
            return state;

    }
}
export default User;