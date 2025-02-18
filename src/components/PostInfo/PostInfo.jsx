import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h2 className="PostInfo__title">{post.title}</h2>
        <p>
          {' Posted by '}
          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>
      {post.comments.length === 0 ? (
        <p data-cy="NoCommentsMessage">No comments yet.</p>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </article>
  );
};
