import Axios from 'axios';
import {API_URL,CREATE_TASK,LIST_TASK,UPDATE_TASK_STATUS} from '../actions/actionType';

export const createTaskSuccess = (task)=>{
    return {
        type:CREATE_TASK,
        task
    }
};

export const createTask = (task,token)=>{
    return (dispatch)=>{
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`
            }
          };
        return Axios.post(API_URL+"tasks",task,config)
            .then(res=>{
                dispatch(createTaskSuccess(res.data));
                
               
            })
            .catch(error=>{
                throw error;
            });
    }
};

export const liskTaskSuccess=(tasks)=>{
    return {
        type:LIST_TASK,
        tasks
    }
};
export const listTask = (token)=>{
    return (dispatch)=>{
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`
            }
          };
        return Axios.get(API_URL+"tasks",config)
            .then(res=>{
                dispatch(liskTaskSuccess(res.data));
                
               
            })
            .catch(error=>{
                throw error;
            });
    }
}
export const updateTaskSuccess=(msg)=>{
    return {
        type:UPDATE_TASK_STATUS,
        msg
    }

}

export const updateTaskStatus=(token,id)=>{
    
    return (dispatch)=>{
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`
            }
          };
        return Axios.put(API_URL+"tasks/"+id,null,config)
            .then(res=>{
                dispatch(updateTaskSuccess(res.data));
                
                
               
            })
            .catch(error=>{
                throw error;
            });
    }
}