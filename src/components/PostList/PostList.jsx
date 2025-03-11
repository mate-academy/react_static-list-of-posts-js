import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ postComponents }) => (
  <div className="PostList">
    {postComponents.map(component => (
      <PostInfo component={component} key={component.id} />
    ))}
  </div>
);
