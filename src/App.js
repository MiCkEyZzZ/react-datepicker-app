import React, {Component} from 'react'
import Layout from './hoc/Layout/Lauout'
import Datepicker from './container/Dateoicker/Datepicker'

class App extends Component {
  render() {
    return (
        <Layout>
          <Datepicker value={new Date()} />
        </Layout>
    );
  }
}

export default App
