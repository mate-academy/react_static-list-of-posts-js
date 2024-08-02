import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
