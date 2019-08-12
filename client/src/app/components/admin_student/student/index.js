import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createTask} from '../../../actions/task';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null
          }
    }
    onChangeHandler=(e)=>{
        this.setState({
            selectedFile: event.target.files[0],
            
          });
    }
    imageUpload=()=>{
        let task = new FormData();
        let token = this.props.login_user.token;
        task.append('img',this.state.selectedFile);
        task.append('user',this.props.login_user.user._id);
        this.setState({
            selectedFile: null
            
          });
        this.props.upload(task,token);
        
    }
    msg_handle=()=>{
        var msg ="";
        if(this.props.action_task){
            if(this.props.action_task.success)
            {
                msg=<span className="text-success">{this.props.action_task.msg}</span>;
               
            }
            else{
                msg=<span className="text-success">{this.props.action_task.msg}</span>;
            }
            
        }
        else{
            msg="";
        }
        return msg;
    }

    
    
    render(){
        
        if(this.props.login_user){
            if(this.props.login_user.token){
                return (
                    <div>
                                
                       
                        <div className="sidenav">
                                <div className="login-main-text">
                                <h2> Student Portal</h2>
                                
                                </div>
                        </div>
                        
                        <div className="main">
                            <div className="col-md-6 col-sm-12">
                            <div className="login-form">
                                {this.msg_handle()}
                                <div className="form-group files">
                                    <label>Upload Your File </label>
                                    <input type="file" className="form-control" multiple="" onChange={this.onChangeHandler}/><br/>
                                    <button className="btn btn-primary" onClick={this.imageUpload}>Upload</button>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
            
                    );
            }
            else{
                return (
                <div>
                    <div className="sidenav">
                        <div className="login-main-text">
                            <h2> Student Portal</h2>
                        </div>
                    </div>
                    <div className="main">
                        <div className="col-md-6 col-sm-12">
                            <div className="login-form">
                            <h5 className="alert alert-danger">To access this page.Please Login first from <Link to="/">Here</Link>....</h5>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        else{
            return (
                  <div>
                    <div className="sidenav">
                        <div className="login-main-text">
                            <h2> Student Portal</h2>
                        </div>
                    </div>
                    <div className="main">
                        <div className="col-md-6 col-sm-12">
                            <div className="login-form">
                                <h5 className="alert alert-danger">To access this page.Please Login first from <Link to="/">Here</Link>....</h5>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
        
    }
}
const mapStateToProps = (state)=>{

    return {
        login_user:state.Login,
        action_task:state.ActionTask
    }

}
const mapDispatchToProps = (dispatch)=>{
    return {
        upload:(task,token)=>{
            dispatch(createTask(task,token));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);