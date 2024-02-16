import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo
            post={post}
          />
        </li>
      ))}
    </ul>
  </div>
);
