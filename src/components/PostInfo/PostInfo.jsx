import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';

import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const postComments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo
          user={usersFromServer.find(user => user.id === post.userId)}
        />
      </div>
      <p className="PostInfo__body">{post.body}</p>

      {postComments.length === 0 ? (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      ) : (
        <CommentList comments={postComments} />
      )}
    </div>
  );
};
