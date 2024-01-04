import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo post={post} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    <CommentList post={post} />
  </div>
);
