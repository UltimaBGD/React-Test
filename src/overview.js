import React, { Component } from 'react';
import ProjectsPanel from './ProjectsPanel.js';
import TeamsPanel from './TeamsPanel.js';
import EmployeesPanel from './EmployeesPanel.js';
// import whatever else you like here

// Declare your Component here
class Overview extends Component {
    render() {
        return (
            <div className = "container">
                <h1 className = "page-header"> Overview </h1>
                <div className = "row">
                    <div > <ProjectsPanel /></div>
                    <div > <TeamsPanel /> </div>
                    <div > <EmployeesPanel /></div>
                </div>
            </div>
        );
    }
}
// export the component by name
export default Overview;