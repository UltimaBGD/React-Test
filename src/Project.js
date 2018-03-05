import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Projects extends Component{
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }
    componentDidMount(){
        axios.get("https://morning-crag-84652.herokuapp.com/projects").then((res) =>{
            this.setState({
                projects: res.data,
            });
        }).catch((err) =>{

        });
    }
    render() {
        return (
            <div> <h1>Projects</h1> <hr/>
                  <div className="panel panel-default">
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        <thead className= "thead-default">
                           <tr> <td><strong>Name</strong></td><td><strong>Project Description</strong></td><td><strong>Start Date</strong></td><td><strong>Active Time</strong></td></tr>
                        </thead>
                          <tbody>
                          {this.state.projects.map((obj, index) => {
                            return (
                                <tr key = {index}><td className="col-md-3">{obj.ProjectName}</td><td className = "col-md-5">{obj.ProjectDescription}</td> <td className = "col-md-2">{moment(obj.ProjectStartDate).format('MMMM Do YYYY')}</td><td className = "col-md-2">{moment(obj.ProjectStartDate).fromNow()}</td></tr>
                            );
                        })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
        );
    }
}

export default Projects;