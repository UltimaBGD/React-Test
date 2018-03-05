import React, { Component } from 'react';
import MainContainer from './MainContainer.js';

class NotFound extends Component {
    render() {
        return (
            <MainContainer> <h3>Resource not found </h3> </MainContainer>
        );
    }
}

export default NotFound;