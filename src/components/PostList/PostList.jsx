import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  const { id } = posts;

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={id} />
      ))}
    </div>
  );
};
