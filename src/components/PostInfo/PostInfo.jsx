import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post, comments, users }) => {
  const user = post.user || users;
  const postComments = post.comments || comments;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          <UserInfo user={user} />
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      {postComments && postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
