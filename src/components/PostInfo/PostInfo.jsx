export const PostInfo = ({ post }) => {
  const { body, id, title } = post;

  return (
    <div key={id} className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href="mailto:Sincere@april.biz">
            Leanne Graham
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </div>
  );
};
