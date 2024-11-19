import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <div key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
