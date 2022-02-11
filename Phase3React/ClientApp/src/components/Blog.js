import React, { Component } from 'react';
import { Header } from './Header';
import { Posts } from './Posts';

export class Blog extends Component {
    static displayName = Blog.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header name="Blogging App" />
                <Posts/>
            </div>
        );
    }
}

