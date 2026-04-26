import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div className="PostInfo">
        <PostInfo post={post} key={post.id} />
      </div>
    ))}
  </div>
);
