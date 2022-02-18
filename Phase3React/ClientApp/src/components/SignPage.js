import React, { Component } from 'react';
import { Header } from './Header';
import { Sign } from './Sign';

export class SignPage extends Component {
    static displayName = SignPage.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header name="E-Health Care Management System" />
                <Sign />
            </div>
        );
    }
}

