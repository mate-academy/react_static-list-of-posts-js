import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ todos }) => (
  <div className="PostList">
    {todos.map(todo => (
      <PostInfo key={todo.id} todo={todo} />
    ))}
  </div>
);
