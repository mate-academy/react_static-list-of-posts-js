import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postList, userList, commentList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo
        post={post}
        user={userList}
        Comments={commentList}
        key={post.id}
      />
    ))}
  </div>
);
