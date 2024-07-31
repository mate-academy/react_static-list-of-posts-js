import { CommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const comments = post.comments.length ? post.comments : [];

  const displayComments = commentsList =>
    commentsList.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ));

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

      {comments.length ? (
        displayComments(comments)
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
