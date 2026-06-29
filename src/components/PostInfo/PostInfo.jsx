import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, user, comments }) => {
  const postUser = user ?? post.user;
  const postComments = comments ?? post.comments;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          {postUser && <UserInfo user={postUser} />}
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      <CommentList comments={postComments} />
    </div>
  );
};
