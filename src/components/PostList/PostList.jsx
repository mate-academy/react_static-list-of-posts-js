import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ newPosts }) => (
  <div className="PostList">
    {newPosts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
