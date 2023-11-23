import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
      />
    ))}

  </ul>
);
