import './UserInfo.scss';

export const UserInfo = ({ postUser }) => (
  <a className="UserInfo" href={`mailto:${postUser.email}`}>
    {postUser.name}
  </a>
);
