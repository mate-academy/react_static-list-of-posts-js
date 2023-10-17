import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
