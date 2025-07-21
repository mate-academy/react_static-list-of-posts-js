export const UserInfo = ({ post }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${post.user.email}`}>
      {post.user.name}
    </a>
  </p>
);
