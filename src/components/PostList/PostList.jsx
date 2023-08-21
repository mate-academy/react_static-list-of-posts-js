import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <ul
    className="PostList"
    style={{
      padding: 0,
      listStyle: 'none',
    }}
  >
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
