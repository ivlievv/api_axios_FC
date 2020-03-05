import React            from 'react';
import PropTypes        from 'prop-types';
import withData         from '../HOC/withData.js';
import { getUserTasks } from '../../api/taskController.js';

const TasksList = (props) => {

  const { tasks, isFetching } = props;

  return (
    <ol>
      {
        tasks.map( item => (<li key={item.id}>{item.value}</li>) )
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType(
                                                 [PropTypes.string, PropTypes.number] ).isRequired,
                                               value: PropTypes.string.isRequired,
                                               isDone: PropTypes.bool.isRequired,
                                               deadline: PropTypes.string.isRequired,

                                             } ) ).isRequired
};

TasksList.defaultProps = {
  tasks: [],
};

export default withData( getUserTasks, TasksList );