import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  !posts || posts.length === 0 ? (
    <p className="NoPostsMessage">No posts yet</p>
  ) : (
    <div className="PostList">
      {posts.map(post => <PostInfo key={post.id} post={post} />)}
    </div>
  )
);
