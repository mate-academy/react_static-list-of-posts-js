import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(el => (
      <PostInfo post={el} key={el.id} />
    ))}
  </div>
);
