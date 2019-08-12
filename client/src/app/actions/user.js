import Axios from 'axios';
import {CREATE_USER,CLEAR_USER,API_URL} from '../actions/actionType';

export const createUserSuccess = (user)=>{
    return {
        type:CREATE_USER,
        user
    }
};
export const clearUser = ()=>{
    return {
        type:CLEAR_USER,
        user:null
    }
};
export const createUser = (user)=>{
    return (dispatch)=>{
        return Axios.post(API_URL+"users",user)
            .then(res=>{
                dispatch(createUserSuccess(res.data));
                
               
            })
            .catch(error=>{
                throw error;
            });
    }
}