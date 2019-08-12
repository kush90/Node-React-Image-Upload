import React from 'react';
import ReactTable from 'react-table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import 'react-table/react-table.css';

import {listTask,updateTaskStatus} from '../../../actions/task';

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      if(this.props.login_user){
        if(this.props.login_user.token){
          this.interval = setInterval( ()=>{
            this.props.listTask(this.props.login_user.token)
          }, 1000);
        }
      }
     
     
    }
    componentWillUnmount(){
      clearInterval(this.interval);
    }
    approve(id){
      
      this.props.updateStatus(this.props.login_user.token,id);
      // this.props.listTask(this.props.login_user.token);
    }

    
    render(){
          let tasks=[];
          if(this.props.tasks){
            tasks =this.props.tasks.tasks;
          }
          
         
         
          const columns = [ {
            id: 'user', // Required because our accessor is not a string
            Header: 'Name',
            accessor: d => d.user.username, // Custom value accessors!,
            width:150,
            maxWidth:100,
            minWidth:100
          }, {
            Header: props => <span>Phone no</span>, // Custom header components!
            accessor: 'user.phone_no',
            width:150,
            maxWidth:100,
            minWidth:100
          },
          {
            Header: 'Status', // Custom header components!
            accessor: 'status',
            width:150,
            maxWidth:100,
            minWidth:100
           
          },
          {
            Header: 'Image', // Custom header components!
            Cell:props=> <a href={props.original.img}  target="_blank" data-toggle="tooltip" data-html="true" title="Click the image"><img className="img-responsive" width={50} height={50} src={props.original.img}/></a>,
            width:100,
            maxWidth:100,
            minWidth:100
           
          },
          {
          Header: 'Action',
          Cell:props=><button className="btn btn-primary" onClick={()=>{
              this.approve(props.original._id);
            }}>Approve</button>,
          width:100,
            maxWidth:100,
            minWidth:100
          }

        
        ];
        
        if(this.props.login_user){
          if(this.props.login_user.token){
            return (
            
              <div>
                  <div className="sidenav">
                      <div className="login-main-text">
                      <h2>Admin Portal</h2>
                      
                      </div>
                  </div>
                                  
                  <div className="main">
                        <div className="col-md-12 col-sm-12">
                        
                          <div className="login-form_admin_index">
                            <ReactTable data={tasks} columns={columns} defaultPageSize = {5}/>
                        
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
                      <h2>Admin Portal</h2>
                      
                      </div>
                  </div>
                                  
                  <div className="main">
                        <div className="col-md-12 col-sm-12">
                        
                          <div className="login-form_admin_index">
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
                      <h2>Admin Portal</h2>
                      
                      </div>
                  </div>
                                  
                  <div className="main">
                        <div className="col-md-12 col-sm-12">
                        
                          <div className="login-form_admin_index">
                          <h5 className="alert alert-danger">To access this page.Please Login first from <Link to="/">Here</Link>....</h5>                        
                          </div>
                           
                        </div>
                  </div>
              </div>
        );
        }
          
        
    }
}
const mapStateToProps=(state)=>{
    return {
      tasks:state.Task,
      action_task:state.ActionTask,
      login_user:state.Login
    }
}
const mapDispatchToProps=(dispatch)=>{
  return {
     listTask:(token)=>{
      dispatch(listTask(token));
     },
     updateStatus:(token,id)=>{
      dispatch(updateTaskStatus(token,id))
     }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);