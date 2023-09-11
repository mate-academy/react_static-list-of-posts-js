import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <ul className="PostList__list">
      {posts.map(post => (
        <li className="PostList__item">
          <PostInfo post={post} key={post.id} />
        </li>
      ))}
    </ul>

  </div>
);
