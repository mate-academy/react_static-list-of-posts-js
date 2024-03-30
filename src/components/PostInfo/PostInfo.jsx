import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">

      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo userId={post.userId} />
      </p>
    </div>

    <p className="PostInfo__body">

      {post.body}
    </p>

    <hr />

    <CommentList
      posts={post}
    />
  </div>

);
