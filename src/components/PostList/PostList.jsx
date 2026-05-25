import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ list }) => {
  return (
    <div className="PostList">
      {list.map(item => {
        return <PostInfo post={item} key={item.id} />;
      })}
    </div>
  );
};