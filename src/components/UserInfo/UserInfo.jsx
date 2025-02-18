import './UserInfo.scss';

export const UserInfo = ({ userInfo }) => (
  <div className="PostInfo__header">
    <h3 className="PostInfo__title">{userInfo.title}</h3>

    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${userInfo.user.email}`}>
        {userInfo.user.name}
      </a>
    </p>
  </div>
);
