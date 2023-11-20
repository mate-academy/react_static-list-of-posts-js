import { PostInfo } from '../PostInfo';

export const PostList = ({ serverPosts }) => (
  <div className="PostList">
    {serverPosts.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </div>
);
