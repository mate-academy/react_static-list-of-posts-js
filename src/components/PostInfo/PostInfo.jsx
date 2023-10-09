import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <UserInfo user={post.user} key={post.user.id} />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList comments={post.comments} key={post.comments.id} />
  </div>
);
