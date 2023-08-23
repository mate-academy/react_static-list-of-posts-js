import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        comments={post.comments}
        key={post.id}
      />
    ))}
  </div>
);
