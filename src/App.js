import React, {Component} from 'react'
import Layout from './hoc/Layout/Lauout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Datepicker from './container/Datepicker/Datepicker'
import Home from './container/Home/Home'
import Auth from './container/Auth/Auth'

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path='/auth' component={Auth} />
                <Route path='/datepicker' component={Datepicker} />
                <Route path='/' component={Home} />
                <Redirect to={'/'} />
            </Switch>
        </Layout>
    );
  }
}

export default App
