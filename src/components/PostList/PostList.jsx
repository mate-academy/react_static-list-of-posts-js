import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo todo={post} key={post.id} />
    ))}
  </>
);
