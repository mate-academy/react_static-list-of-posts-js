export const PostInfo = ({ post, user }) => {
  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          <a className="UserInfo" href={`mailto:${user.email}`}>
            {user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>
    </>
  );
};
