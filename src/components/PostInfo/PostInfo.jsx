import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ currentPost }) => {
  if (!currentPost) {
    return false;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{currentPost.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo currentPostUserId={currentPost.userId} />
        </p>
      </div>

      <p className="PostInfo__body">{currentPost.body}</p>

      <hr />
      <CommentList currentPost={currentPost} />
    </div>
  );
};
