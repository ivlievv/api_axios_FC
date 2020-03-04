import { Link }         from 'react-router-dom';
import React            from 'react';
import DataLoader       from '../components/DataLoader';
import { getUserTasks } from '../api';
import TasksList        from '../components/TasksList';

function Home (props) {

  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/contacts">Contacts</Link>
      <DataLoader loadData={getUserTasks} render={({ data, ...rest }) => (<TasksList tasks={data || []} {...rest}/>)}/>
    </>
  );

}

export default Home;