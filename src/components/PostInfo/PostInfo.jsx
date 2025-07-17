import { UserInfo } from '../UserInfo/UserInfo';
import commentsFromServer from '../../api/comments.json';
import { CommentList } from '../CommentList/CommentList';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo
            user={usersFromServer.find(user => user.id === post.userId)}
          />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      <CommentList comments={commentsFromServer} postId={post.id} />
    </div>
  );
};
