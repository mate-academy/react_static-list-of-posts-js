import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} comments={comments} users={users} />
    ))}
  </div>
);
