
import './UserInfo.scss';

export const UserInfo = ({ post }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${post.owner.email}`}>
      {post.owner.name}
    </a>
  </p>
);
