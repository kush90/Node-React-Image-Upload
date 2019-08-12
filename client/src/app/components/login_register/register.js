import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {createUser,clearUser} from '../../actions/user';

require('../../public/css/style.css');
class Register extends React.Component{

    constructor(props){
        super(props);
       

    }
    register=(e)=>{
        e.preventDefault();
        let newUser = {
            username: e.target.username.value,
            phone_no: e.target.phone_no.value,
            password: e.target.password.value,
        }
        this.props.createUser(newUser);
        e.target.username.value="";
        e.target.phone_no.value="";
        e.target.password.value="";
       
    }
    msg_handle=()=>{
        var msg ="";
        if(this.props.user){
            if(this.props.user.success)
            {
                msg=<span className="text-success">{this.props.user.msg}</span>;
               
            }
            else{
            msg=<span className="text-danger">{this.props.user.msg}</span>;
            
            }
        }
        else{
            msg="";
        }
        return msg;
    }
    componentWillUnmount() {
        this.props.clearUser();
        
    }
    
    render(){
        
       
        return (
            <div>

           
            <div className="sidenav">
                <div className="login-main-text">
                  <h2> Application<br/>Registration Page</h2>
                  <p><Link to="/">Login</Link>  from here to access.</p>
                </div>
            </div>
            <div className="main">
            
                <div className="col-md-6 col-sm-12">
               
                <div className="login-form">
                {this.msg_handle()}
                <form onSubmit={this.register} >
                    <div className="form-group">
                       <label>User Name:</label>
                       <input type="text" name ="username" className="form-control" placeholder="User Name" required/>
                    </div>
                    <div className="form-group">
                       <label>Phone no:</label>
                       <input type="text" name="phone_no" className="form-control" placeholder="Phone no" required/>
                    </div>
                    <div className="form-group">
                       <label>Password:</label>
                       <input type="password" name="password" className="form-control" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Register</button>
                    
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
          user:state.User
      }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        createUser:(customer)=>{
            dispatch(createUser(customer));
        },
        clearUser:()=>{
            dispatch(clearUser());
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Register);