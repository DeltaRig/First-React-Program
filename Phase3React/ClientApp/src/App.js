import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Blog } from './components/Blog';
import { SingIn } from './components/SingIn';
import { SingUp } from './components/SingUp';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/singin' component={SingIn} />
            <Route path='/singup' component={SingUp} />
      </Layout>
    );
  }
}
