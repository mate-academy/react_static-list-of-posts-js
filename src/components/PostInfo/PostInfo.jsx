import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const { user, comments } = post;
  const noComments = (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {user ? <UserInfo user={user} /> : null}
      </div>

      <p className="PostInfo__body">{post.body}</p>
      {comments.length > 0 ? <CommentList comments={comments} /> : noComments}
    </div>
  );
};
