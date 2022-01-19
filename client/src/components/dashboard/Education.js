import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education }) => {
  const dispatch = useDispatch();

  const deleteEdu = (edu) => {
    dispatch(deleteEducation(edu._id));
  };

  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>School</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEdu(edu)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 class='my-2'>Education Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>School</th>
            <th class='hide-sm'>Degree</th>
            <th class='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

// Experience.propTypes = {
//   experience: PropTypes.array.isRequired,
// };

export default Education;
