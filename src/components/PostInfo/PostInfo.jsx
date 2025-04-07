import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export function PostInfo({ post, user, postComments = [] }) {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {user ? <UserInfo user={user} /> : null}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
}
