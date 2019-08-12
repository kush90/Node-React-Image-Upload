import {LIST_TASK} from '../actions/actionType';

const Task = (state=null,action)=>{
    switch(action.type){
        
        case LIST_TASK:
            return action.tasks;
      
      
        default:
            return state;

    }
}
export default Task;