import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postList, userList, commentList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo
        post={post}
        userList={userList}
        commenstList={commentList}
        key={post.id}
      />
    ))}
  </div>
);
