import React , { Component } from 'react';
import {inject ,observer } from 'mobx-react';
import { action } from 'mobx';

@inject('TaskStore')
@observer
class CreateTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskInput : "",
      taskList : []
    }
  this.onSubmit = this.onSubmit.bind(this);
  this.onItemDelete = this.onItemDelete.bind(this);
  }

  onHandleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onItemDelete (event, id) {
    event.preventDefault()
    this.props.TaskStore.deleteTask(id);
  }

  onUpdate (event, id) {
    event.preventDefault();
    const enteredName = prompt('Update Task')
    console.log("Name",id);
    this.props.TaskStore.updateTask(id, enteredName)
  }

  onSubmit (event)  {
    event.preventDefault();
    const { taskInput } = this.state;
    if (taskInput.length > 0) {
      const data = {
        name: taskInput
      }
      console.log(data);
      this.props.TaskStore.addTask(data);
      this.setState({
        taskInput: ""
      })
    }
  }

  render() {
    const {TaskStore} =this.props;
    return (
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="row">
              <div className="col-md-4 offset-4">
                <div className="card">
                  <div className="card-body">
                    <h1>Total task {TaskStore.taskCount}</h1>
                    <form className="mb-2" onSubmit={e => this.onSubmit(e)}>
                      <input
                        className="form-control"
                        type="text"
                        name="taskInput"
                        value={this.state.taskInput}
                        onChange={this.onHandleChange}
                      />
                      <button
                        className="btn btn-warning pull-left mt-2 mb-2"
                      >
                        Add
                      </button>
                    </form>
                    <table className="table">
                      <tbody>
                        {
                          TaskStore.taskList.map((elements,key)=>(
                            <tr key={key}>
                              <td>{key+1}</td>
                              <td className="w-50">{elements.name}</td>
                              <td className="text-left">
                                <button className="btn btn-success" onClick={e => this.onUpdate(e, key)}>Edit</button>
                                <button className="btn btn-danger ml-2" onClick={e => this.onItemDelete(e, key)}>Delete</button>
                              </td>
                            </tr>
                        ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default CreateTask;
