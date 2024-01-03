import { CommentList } from '../CommentList';
import { NoCommentsMessage } from '../NoCommentsMessage';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {
      post.comments.length === 0
        ? <NoCommentsMessage />
        : <CommentList comments={post.comments} />
    }
  </div>
);
