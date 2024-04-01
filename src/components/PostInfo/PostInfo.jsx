import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import commentsFromServer from '../../api/comments.json';

export const PostInfo = ({ post }) => {
  const comments = commentsFromServer.filter(el => el.postId === post.id);
  const isComments = !comments.length;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo userId={post.userId} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {isComments ? (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
