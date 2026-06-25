import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const comments = post.comments || [];

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={post.user} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {comments.length === 0 && (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

      {comments.length !== 0 && <CommentList comments={post.comments} />}
    </div>
  );
};
