import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../../actions/login';

class Login extends React.Component{

    constructor(props){
        super(props);
    }
    login = (e)=>{
         e.preventDefault();
        let login_user = {
            username:e.target.username.value,
            password:e.target.password.value
        };
        this.props.login(login_user);
        
       
    }
    error_handle=()=>{
        var msg ="";
        if(this.props.login_user){
            if(!this.props.login_user.success)
            {
                msg=<span className="text-danger">{this.props.login_user.msg}</span>;
               
            }
        }
        return msg;
        
    }
    componentDidUpdate(){
        if(this.props.login_user){
            if(this.props.login_user.success){
                if(this.props.login_user.user.role=="student"){
                    this.props.history.push('/student');
                }
                else if(this.props.login_user.user.role=="admin"){
                    this.props.history.push('/admin');
                }
            }
        }
    }
    render(){
        
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                    <h2> Application<br/>Login Page</h2>
                    <p><Link to="/register">Register</Link> first from here to access.</p>
                    </div>
                </div>
                <div className="main">
                <div className="col-md-6 col-sm-12">
                    
                    <div className="login-form">
                    {this.error_handle()}
                        <form onSubmit={this.login}>
                            <div className="form-group">
                                <label>User Name:</label>
                                <input type="text" name="username" className="form-control" placeholder="User Name" required/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" className="form-control" placeholder="Password" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            &nbsp;&nbsp;<Link to="/register"><b style={{color:'red'}}>Register here !</b></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
           
        );
    }
}
const mapStateToProps = (state)=>{
    return {
       
        login_user:state.Login
    }
}
const mapDispatchToProps  = (dispatch)=>{
    return {
        login:(user)=>{
            dispatch(login(user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);