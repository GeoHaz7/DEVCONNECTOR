import React from 'react';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, feildofstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Feild Of Study: </strong>
        {feildofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description === '' ? 'No Description' : description}
      </p>
    </div>
  );
};

export default ProfileEducation;
