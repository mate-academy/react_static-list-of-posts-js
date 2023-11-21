import './UserInfo.scss';

export const UserInfo = ({ post }) => (
  <a className="UserInfo" href={`mailto:${post.email}`}>
    {post.user.name}
  </a>
);
