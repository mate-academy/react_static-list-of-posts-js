import usersFromServer from '../../api/users.json';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

const findUser = userId => {
  return usersFromServer.find(user => user.id === userId);
};

export const PostInfo = ({ post }) => {
  const user = findUser(post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by '}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {post.comments && post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
