import React, { Component } from 'react';
import MainContainer from './MainContainer.js';
import Overview from './overview.js';
import Project from './Project.js';
import Team from './Teams.js';
import Employee from './Employees.js';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
    <Route exact path='/' render={() => (
        <MainContainer sidebar='Overview'>
        <Overview /></MainContainer>
    )}/>
    <Route exact path='/projects' render={() => (
    <MainContainer sidebar='Projects'>
    <Project  /></MainContainer>
    )}/>
    <Route exact path='/teams' render={() => (
        <MainContainer sidebar='Teams'>
        <Team  /></MainContainer>
    )}/>
    <Route exact path='/employees' render={() => (
        <MainContainer sidebar='Employees'>
        <Employee  /></MainContainer>
    )}/>
    <Route render={() => (
    <NotFound />
    )}/>
    </Switch>

    );
  }
}

export default App;