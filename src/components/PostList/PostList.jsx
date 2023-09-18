import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.length > 0 && posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
