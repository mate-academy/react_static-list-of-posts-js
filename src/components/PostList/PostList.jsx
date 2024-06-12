import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li>
        <PostInfo post={post} key={post.id} />
      </li>
    ))}
  </ul>
);
