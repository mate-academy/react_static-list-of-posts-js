import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        comments={comments}
        users={users}
        key={post.id}
      />
    ))}
  </div>
);
