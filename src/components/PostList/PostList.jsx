import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div className="PostList">
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
