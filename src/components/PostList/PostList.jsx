import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ list, users }) => {
  return (
    <div className="PostList">
      {list.map(post => (
        <PostInfo
          post={post}
          key={post.id}
          user={users.find(user => user.id === post.userId)}
        />
      ))}
    </div>
  );
};
