import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post, userList, commenstList }) => {
  const user = userList.find(usr => usr.id === post.userId);
  const listOfComments = commenstList.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {listOfComments.length !== 0 ? (
        <CommentList commenstList={listOfComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
