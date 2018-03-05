import React, { Component } from 'react';
import axios from 'axios';

class Teams extends Component{
    constructor(){
        super();
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        axios.get("https://morning-crag-84652.herokuapp.com/teams").then((res) =>{
            this.setState({
                arr: res.data,
            });
        }).catch((err) =>{

        });
    }
    render() {
        return (
            <div> <h1>Teams</h1> <hr/>
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        <thead className= "thead-default">
                           <tr> <td><strong>Team Name</strong></td><td><strong>Current Projects</strong></td><td><strong>Number of Employees</strong></td><td><strong>Head Employee</strong></td></tr>
                        </thead>
                          <tbody>
                          {this.state.arr.map((obj, index) => {
                            return (
                                <tr key = {index}><td ClassName = "col-md-4">{obj.TeamName}</td><td><ul>{obj.Projects.map((proj, index) => {
                                    return (
                                        <li>{proj.ProjectName}</li>
                                    );
                                })}</ul></td><td ClassName = "col-md-4">{obj.Employees.length} employees</td> <td ClassName = "col-md-4">{obj.TeamLead.FirstName} {obj.TeamLead.LastName}</td></tr>
                            );
                        })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  </div>
        );
    }
}

export default Teams;