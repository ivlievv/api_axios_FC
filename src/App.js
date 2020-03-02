import React                                                             from 'react';
import { createTask as createTaskRequest, getUserTasks, updateTaskById } from './api';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      isFetching: false,
      value: '',
      deadline: '',
      isDone: false,
      tasks: [],
      error: null,
    };
  }

  async componentDidMount () {
    try {
      this.setState( {
                       isFetching: true,
                     } );

      const { data } = await getUserTasks();

      this.setState( {
                       tasks: data,
                     } );
    } catch (e) {
      this.setState( {
                       error: `${e.response}`,
                     } );
    } finally {
      this.setState( {
                       isFetching: false,
                     } );

    }

  }

  handleValueChange = (e) => {
    const { name, type } = e.target;
    console.dir( e.target );
    this.setState( {
                     [name]: type === 'checkbox'
                       ? e.target.checked
                       : e.target.value,
                   } );
  };

  createTask = async (e) => {
    e.preventDefault();
    try {

      this.setState( {
                       isFetching: true,
                     } );

      const { data } = await createTaskRequest( {
                                                  value: this.state.value,
                                                  deadline: this.state.deadline,
                                                  isDone: this.state.isDone,
                                                } );
      this.setState( {
                       tasks: [data, ...this.state.tasks],
                     } );

    } catch (e) {
      this.setState( {
                       error: `${e.response}`,
                     } );
    } finally {
      this.setState( {
                       isFetching: false,
                     } );
    }
  };

  render () {

    const { tasks, isFetching, error, value, deadline, isDone } = this.state;

    return (
      <div>
        <form onSubmit={this.createTask}>
          <label htmlFor="taskValueInput">
            <span>Task Value: </span>
            <input id="taskValueInput" type="text" name="value" onChange={this.handleValueChange} value={value}/>
          </label>
          <br/>
          <label htmlFor="taskDeadLineInput">
            <span>Deadline: </span>
            <input type="date" name="deadline" onChange={this.handleValueChange}/>
          </label>
          <br/>
          <label htmlFor="valueIsDone">
            <span>Is done: </span>
            <input type="checkbox" name="isDone" onChange={this.handleValueChange}/>
          </label>
          <br/>
          <input type="submit"/>
        </form>
        <ul>
          {
            isFetching && (<li>Loading...</li>)
          }
          {
            tasks.map( item => (
              <li key={item.id}>{`${item.value} ${item.deadline} is done: ${item.isDone}`}</li>
            ) )
          }
        </ul>
      </div>
    );
  }
}

export default App;
