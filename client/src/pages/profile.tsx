import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';
import { Loading, Error } from '../components';

const Profile: FC<{}> = () => {
  const { data, error, loading } = useQuery(GET_USER);

  if (loading) { return <Loading />; }
  if (error) { return <Error message={error.message} />; }

  return (
    <>
      <div>
        Email:
        {data.getUser.email}
      </div>
      <br />
      {data.getUser.profile
        && (
          <>
            <div>
              First name:
              {data.getUser.profile.firstName}
            </div>
            <br />
            <div>
              Last name:
              {data.getUser.profile.lastName}
            </div>
            <br />
          </>
        )}
    </>
  );
};

export default Profile;
