// import { CommentInfo } from '../CommentInfo/CommentInfo';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

export const PostInfo = ({ comments, post, users }) => {
  const postComments = comments.filter(comment => comment.postId === post.id);
  const currentUser = users.find(user => user.id === post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <UserInfo user={currentUser} />
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />

      <CommentList comments={postComments} />
    </div>
  );
};
