import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Employees extends Component{
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
            <div>
                <div> <h1>Employees</h1> <hr/>
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        <thead className= "thead-default">
                           <tr> <td><strong>Employee Name and Title</strong></td><td><strong>Addresses</strong></td><td><strong>Contact Number</strong></td><td><strong>Hire Date</strong></td></tr>
                        </thead>
                          <tbody>
                          {this.state.arr.map((obj, index) => {
                            return (
                            <tr key = {index}><td ClassName = "col-md-2">{obj.FirstName} {obj.LastName} - {obj.Position.PositionName}</td><td ClassName = "col-md-2"> {obj.AddressStreet} <br/> {obj.AddressCity}, {obj.AddressState} {obj.AddressZip} </td><td ClassName = "col-md-2">{obj.PhoneNum} ext: {obj.Extension}</td><td ClassName = "col-md-3">{moment(obj.HireDate).format('MMMM DD, YYYY')}</td><td ClassName = "col-md-3">$ {obj.SalaryBonus}</td></tr>
                          )})}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
        );
    }
}

export default Employees;