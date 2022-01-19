import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  const deleteExp = (exp) => {
    dispatch(deleteExperience(exp._id));
  };

  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>Company</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => {
            deleteExp(exp);
          }}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 class='my-2'>Experience Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th class='hide-sm'>Title</th>
            <th class='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

// Experience.propTypes = {
//   experience: PropTypes.array.isRequired,
// };

export default Experience;
