import { PostInfo } from '../PostInfo';

export const PostList = ({ todos }) => (
  <div className="PostList">
    {todos.map(post => (
      <PostInfo
        todos={post}
        key={post.id}
      />
    ))}
  </div>
);
