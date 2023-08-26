import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  const {
    id,
  } = posts;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          key={id}
          post={post}
        />
      ))}
    </div>
  );
};
