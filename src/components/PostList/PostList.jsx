import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostInfo } from './PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <div className="PostInfo" key={post.id}>
          <div className="PostInfo__header">
            <h3 className="PostInfo__title">{post.title}</h3>

            <p>
              {' Posted by '}

              <a className="UserInfo" href={`mailto:${post.user.email}`}>
                {post.user.name}
              </a>
            </p>
          </div>

          <p className="PostInfo__body">{post.body}</p>

          <hr />

          {!post.comments.length ? (
            <b data-cy="NoCommentsMessage">No comments yet</b>
          ) : (
            <div className="CommentList">
              {post.comments.map(comment => (
                <div className="CommentInfo" key={comment.id}>
                  <div className="CommentInfo__title">
                    <strong className="CommentInfo__name">
                      {comment.name}
                    </strong>

                    {' by '}

                    <a
                      className="CommentInfo__email"
                      href={`mailto:${comment.email}`}
                    >
                      {comment.email}
                    </a>
                  </div>

                  <div className="CommentInfo__body">{comment.body}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
