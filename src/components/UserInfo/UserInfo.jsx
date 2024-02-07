import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <>
    {user !== null ? (
      <p>
        {' Posted by '}
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      </p>
    ) : null}
  </>
);
