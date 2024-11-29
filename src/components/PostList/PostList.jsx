// eslint-disable-next-line import/no-cycle
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <div className="posts">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  </div>
);
