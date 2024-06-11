import { PostInfo } from '../PostInfo';

export const PostList = ({ fullPosts }) => (
  <div className="PostList">
    {fullPosts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
