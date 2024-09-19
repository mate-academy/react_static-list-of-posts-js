import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';

export const PostInfo = ({ post }) => {
  const { userId, title, body, id } = post;
  const user = usersFromServer.find(item => item.id === userId);
  const comments = commentsFromServer.filter(comment => comment.postId === id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      {!comments.length ? (
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
