export const PostInfo = ({ post, email, name }) => {
  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          <a className="UserInfo" href={`mailto:${email}`}>
            {name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>
    </>
  );
};
