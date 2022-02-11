import React, { Component } from 'react';

export class Header extends Component {
    static displayName = Header.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>{this.props.headerName}</h2>
        );
    }
}