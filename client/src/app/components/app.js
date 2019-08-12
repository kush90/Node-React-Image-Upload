import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './login_register/login';
import Register from './login_register/register';
import Admin from './admin_student/admin/index';
import Student from './admin_student/student/index';

import {logout} from '../actions/login';



class App extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
     
      let logout="";
      if(this.props.login){
        if(this.props.login.token)
        {
          logout = <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/" onClick={this.props.logout}><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                </ul>
        }
      }
      let student_admin = "";
      if(this.props.login){
        if(this.props.login.token)
        {
          if(this.props.login.user.role=="student")
          {
            student_admin = <ul className="nav navbar-nav">
                    <li><Link to="/student"> Student Portal</Link></li>
                </ul>
          }
          else{
                student_admin = <ul className="nav navbar-nav">
                    <li><Link to="/admin">Admin Portal</Link></li>
                </ul>
          }
        }
      }
        return (
          
        
                <Router>
                <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand">School Management System</a>
                    </div>
                    {student_admin}
                   {logout}
                    
                  </div>
                </nav>
                
                <Switch>
               
                    <Route path="/" component={Login} exact ></Route>
                    <Route path="/register" component={Register} ></Route>
                    <Route path="/admin" component={Admin}></Route>
                    <Route path="/student" component={Student}></Route>

                    
                    
                
                </Switch>
                </div>
                </Router>
             
            
            
    
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        login:state.Login
    }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    logout:()=>{
         dispatch(logout());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);