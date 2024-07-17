import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={post.user} />}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments yet</div>
      )}
    </div>
  );
};
