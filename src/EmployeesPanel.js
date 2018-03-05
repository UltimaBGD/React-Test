import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class EmployeesPanel extends Component{
    constructor(){
        super();
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        axios.get("https://morning-crag-84652.herokuapp.com/employees").then((res) =>{
            this.setState({
                arr: res.data,
            });
        }).catch((err) =>{

        });
    }
    render() {
        return (
            <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                          {this.state.arr.map((obj, index) => {
                            return (
                                <tr key = {index}><td>{obj.FirstName} {obj.LastName}</td><td>{obj.Position.PositionName}</td></tr>
                            );
                        })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                  </div>
                </div>
        );
    }
}

export default EmployeesPanel;