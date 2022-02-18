import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { SignPage } from './components/SignPage';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/Sign' component={SignPage} />
      </Layout>
    );
  }
}
