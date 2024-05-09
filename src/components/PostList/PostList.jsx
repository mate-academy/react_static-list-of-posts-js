import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(postWithUser => (
      <PostInfo post={postWithUser} key={postWithUser.id} />
    ))}
  </div>
);
