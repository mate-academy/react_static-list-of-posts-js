import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo" key={post.id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {post.comments.length > 0 ? (
      post.comments.map(comment => (
        <div className="Comment" key={comment.id}>
          <p className="Comment__body">{comment.body}</p>

          <p>
            {' Commented by  '}

            <a
              className="UserInfo"
              href={`mailto:${comment.email}`}
            >
              {comment.name}
            </a>
          </p>
        </div>
      ))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
