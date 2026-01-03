import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ comments, posts, users }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo comments={comments} key={post.id} post={post} users={users} />
    ))}
  </div>
);
