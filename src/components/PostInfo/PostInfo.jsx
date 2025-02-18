import './PostInfo.scss';
// import usersFromServer from '../../api/users.json';
// import commentsFromServer from '../../api/comments.json';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  // const getUserById = userId => {
  //   return usersFromServer.find(user => user.id === userId);
  // };

  // const getCommentsByPostId = postId => {
  //   return commentsFromServer.filter(comment => comment.postId === postId);
  // };

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user && (
          <p>
            {' Posted by  '}

            <UserInfo user={post.user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {post.comments.length ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
