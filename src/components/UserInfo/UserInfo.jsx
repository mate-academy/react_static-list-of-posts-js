import './UserInfo.scss';

export const UserInfo = ({ post }) => (
  <p>
    {' Posted by  '}
    <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
      {post.user.name}
    </a>
  </p>
);
