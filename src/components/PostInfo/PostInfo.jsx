import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      {post.comments.length === 0 && (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
      {post.comments.length >= 1 && <CommentList comments={post.comments} />}
    </div>
  );
};
