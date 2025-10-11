import { PostInfo } from '../PostInfo/PostInfo';
// eslint-disable-next-line import/no-cycle
import { preparedPosts as posts } from '../../App';

export const PostList = () => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
