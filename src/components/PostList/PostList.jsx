import { PostInfo } from '../PostInfo';

export const PostList = ({ objects }) => (
  <div className="PostList">
    {objects.map(info => (
      <PostInfo
        key={info.id}
        info={info}
      />
    ))}
  </div>
);
