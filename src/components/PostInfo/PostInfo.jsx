import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, comments }) => {
  const postComments = comments
    ? comments.filter(comment => comment.postId === post.id)
    : [];

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user ? <UserInfo user={post.user} /> : ''}
      </div>
      <p className="PostInfo__body">{post.body}</p>

      <hr />

      <CommentList comments={postComments} />
    </div>
  );
};
