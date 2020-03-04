import React     from 'react';
import PropTypes from 'prop-types';

function UsersList (props) {

  const { isFetching, users } = props;

  return (
    <ol>
      {
        users.map( item => (<li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>) )
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType(
                                                 [PropTypes.string, PropTypes.number] ).isRequired,
                                               firstName: PropTypes.string.isRequired,
                                               lastName: PropTypes.string.isRequired,
                                               email: PropTypes.string.isRequired,
                                               profilePicture: PropTypes.string,
                                             } ) ).isRequired,
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;