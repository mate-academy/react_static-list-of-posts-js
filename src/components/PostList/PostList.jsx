import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
