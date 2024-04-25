import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import commentsFromServer from '../../api/comments.json';

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo user={post.user} key={post.userId} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {getCommentsByPostId(post.id).length > 0 ? (
      <CommentList comments={getCommentsByPostId(post.id)} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
