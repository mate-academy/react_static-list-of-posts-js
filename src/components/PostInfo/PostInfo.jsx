import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

function existComment(comments) {
  if (!comments || comments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return <CommentList comments={comments} />;
}

export const PostInfo = ({ post }) => {
  const { user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {existComment(comments)}
    </div>
  );
};
