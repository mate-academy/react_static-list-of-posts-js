import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        {usersFromServer
          .filter(user => user.id === post.userId)
          .map(user => (
            <UserInfo user={user} key={user.id} />
          ))}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={post.comments} />
  </div>
);
