import './PostInfo.scss';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo
          key={getUserById(post.userId).id}
          user={getUserById(post.userId)}
        />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList postId={post.id} comments={commentsFromServer} />
  </div>
);
