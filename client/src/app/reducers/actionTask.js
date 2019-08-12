import {CREATE_TASK,UPDATE_TASK_STATUS} from '../actions/actionType';

const actionTask = (state=null,action)=>{
    switch(action.type){
        case CREATE_TASK:
             return action.task;
        case UPDATE_TASK_STATUS:
            return action.msg
      
        default:
            return state;

    }
}
export default actionTask;