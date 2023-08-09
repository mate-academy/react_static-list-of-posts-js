import { PostInfo } from '../PostInfo';

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
