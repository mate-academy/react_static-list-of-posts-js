import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

export const PostInfo = ({
  post,
  comments = post.comments,
  user = post.user,
}) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {comments.length ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
