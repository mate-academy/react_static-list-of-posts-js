import './UserInfo.scss';

export const UserInfo = ({ post }) => (
  <a className="UserInfo" href={`mailto:${post.user.email}`}>
    {post.user.name}
  </a>
);
