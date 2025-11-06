import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {user && (
      <p>
        {'Posted by '}

        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      </p>
    )}
  </>
);
