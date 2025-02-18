import { PostInfo } from '../PostInfo';

export const PostList = ({ todos }) => (
  <div className="PostList">
    <PostInfo todos={todos} />
  </div>
);
