import './UserInfo.scss';

export const UserInfo = ({ postDetail }) => (
  <a className="UserInfo" href={postDetail.user.email}>
    {postDetail.user.name}
  </a>
);
