import React , { Component } from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import CreateTask from '../components/CreateTask'
import {Provider, observer } from 'mobx-react'
import TaskStore from '../stores/TodoStore'

// @inject('TodoStore')
@observer
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskInput : "",
      taskList : []
    }

  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />
        <Provider TaskStore={TaskStore}>
          <CreateTask/>
        </Provider>
      </div>
    )
  }

}

export default Home
