import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <div className="PostInfo__user">
        { 'Posted by' }
        {post.user && <UserInfo user={post.user} key={post.id} />}
      </div>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>
  </div>
);
