export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          Leanne Graham
        </a>
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);
