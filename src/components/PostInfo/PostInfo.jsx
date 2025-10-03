import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const comments = post.comments || [];

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {post.user ? (
            <UserInfo user={post.user} />
          ) : (
            <span className="UserInfo">Unknown user</span>
          )}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr /> <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
