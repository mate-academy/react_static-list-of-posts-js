import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post, user, comments }) => {
  const postUser = post?.user || user;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{post.title}</h2>
      <p className="PostInfo__body">{post.body}</p>

      <div className="PostInfo__author">
        <span>Author: </span>
        {postUser && <UserInfo user={postUser} />}
      </div>

      <CommentList comments={comments || []} />
    </div>
  );
};
