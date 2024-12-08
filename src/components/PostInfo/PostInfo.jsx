/* eslint-disable */
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  let isNoComments = false;

  if (post.comments.length === 0) {
    isNoComments = true;
  }

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
      {!isNoComments ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
