import { Link }     from 'react-router-dom';
import React        from 'react';
import DataLoader   from '../components/DataLoader';
import { getUsers } from '../api';
import UsersList    from '../components/UsersList';

function Contacts (props) {

  return (
    <>
      <h1>Contacts</h1>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <DataLoader loadData={getUsers} render={({ data, ...rest }) => (<UsersList users={data || []} {...rest}/>)}/>

    </>
  );
}

export default Contacts;