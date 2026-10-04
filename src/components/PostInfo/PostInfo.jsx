import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={post.user} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {post.comments.length > 0 ? (
        <div className="CommentList">
          <CommentList comments={post.comments} />
        </div>
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
