import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="PostList" key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </>
);
