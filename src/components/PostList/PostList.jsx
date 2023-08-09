import { PostInfo } from '../PostInfo';
// import postsFromServer from './api/posts.json';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
