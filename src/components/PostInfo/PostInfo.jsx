import { CommentList } from '../CommentList';
// import { PostList } from "../PostList";
import { UserInfo } from '../UserInfo';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  const filteredComments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  const filteredUsers = usersFromServer.find(user => user.id === post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo
            user={filteredUsers}
          />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {(filteredComments.length > 0
        && <CommentList comments={filteredComments} />)
        || <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
