import Axios from 'axios';
import {LOGIN_USER,API_URL,LOGOUT_USER} from '../actions/actionType';

export const LOGIN_SUCCESS = (user)=>{
      return {
          type:LOGIN_USER,
          user
      }
}

export const login =(user,ownProps)=>{
    return (dispatch)=>{
        return Axios.post(API_URL+"login",user)
            .then(res=>{
                dispatch(LOGIN_SUCCESS(res.data));
                
                
                
            })
            .catch(error=>{
                throw error;
            });
    }
}

export const logoutSuccess =()=>{
        return {
            type:LOGOUT_USER,
            user:null
        }
}
export const logout =(ownProps)=>{
    return (dispatch)=>{
        dispatch(logoutSuccess());
        //  ownProps.history.push(`/`);
        // dispatch(push('/')); // navigate to some route
    }
}