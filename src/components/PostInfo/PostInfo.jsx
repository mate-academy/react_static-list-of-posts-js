import './PostInfo.scss';
import users from '../../api/users.json';
import comments from '../../api/comments.json';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const postByUser = users.find(user => post.userId === user.id);
  const postCommetns = comments.filter(comment => post.id === comment.postId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={postByUser} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {(postCommetns.length !== 0) ? (
        <CommentList comments={postCommetns} />
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
