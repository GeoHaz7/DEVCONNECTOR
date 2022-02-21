import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { useSelector, useDispatch } from 'react-redux';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { Link, useParams } from 'react-router-dom';

const Profile = (props) => {
  const { profile, loading } = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((exp) => (
                    <ProfileExperience key={exp._id} experience={exp} />
                  ))}
                </Fragment>
              ) : (
                <h4>No Experience Credintials</h4>
              )}
            </div>

            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((edu) => (
                    <ProfileEducation key={edu._id} education={edu} />
                  ))}
                </Fragment>
              ) : (
                <h4>No Education Credintials</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithub username={profile.username} />
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
