import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      // Теперь объект post уже содержит внутри себя post.user и post.comments
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
