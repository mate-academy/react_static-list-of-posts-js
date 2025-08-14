import { PostInfo } from '../PostInfo/PostInfo';

// PostList component to display a list of posts
export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div className="PostInfo__header" key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
