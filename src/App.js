import React                      from 'react';
import { getUsers, getUserTasks } from './api';
import './App.css';
import TasksList                  from './components/TasksList';
import UsersList                  from './components/UsersList';
import withData                   from './components/HOC/withData.js';

const UsersListWithData = withData( getUsers, UsersList );
const TasksListWithData = withData( getUserTasks, TasksList );

export default function (props) {
  return (
    <div style={{
      display: 'flex'
    }}>
      <TasksListWithData test={124}/>
      <UsersListWithData abrakadabra={'MAGIC'}/>
    </div>
  );
};