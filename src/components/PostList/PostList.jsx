import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </div>
);
