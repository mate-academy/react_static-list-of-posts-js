import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ data }) => (
  <>
    <div className="PostList">
      {data.map(item => (
        <PostInfo key={item.id} item={item} />
      ))}
    </div>
  </>
);
