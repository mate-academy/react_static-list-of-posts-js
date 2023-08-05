import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts && posts.length > 0 ? (
      posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))
    ) : (
      <p>No posts available.</p>
    )}
  </div>
);
