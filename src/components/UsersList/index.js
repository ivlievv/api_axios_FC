import React from 'react';

function UsersList (props) {

  const { isFetching, items } = props;

  return (
    <ol>
      {
        items.map( item => (<li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>) )
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );
}

export default UsersList;