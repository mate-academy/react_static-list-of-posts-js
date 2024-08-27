import posts from '../../api/posts.json';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = () => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo currentPost={post} />
    ))}
  </div>
);
