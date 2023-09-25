import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <ul>
      {posts.map(post => (
        <li>
          <PostInfo post={post} key={post.id} />
        </li>
      ))}
    </ul>
  </div>
);
