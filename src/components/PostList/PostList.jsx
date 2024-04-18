import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} user={post.user} comment={posts.comment} />
    ))}
  </div>
);
