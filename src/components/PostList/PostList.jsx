import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ todos }) => (
  <ul className="PostList">
    {todos.map(todo => (
      <PostInfo key={todo.id} todo={todo} />
    ))}
  </ul>
);
