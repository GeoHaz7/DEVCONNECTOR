import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { getAllProfiles } from '../../actions/profile';
import { useSelector, useDispatch } from 'react-redux';
import ProfileItem from './ProfileItem';

const Profiles = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const { profiles, loading } = profile;

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i>Browse and connect with
            Developers
          </p>

          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile}></ProfileItem>
              ))
            ) : (
              <h4>No profiles Found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
