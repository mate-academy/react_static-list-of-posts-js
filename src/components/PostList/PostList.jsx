import { PostInfo } from '../PostInfo';

// export const PostList = ({ postList, users, comments }) => (

export const PostList = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo
        key={post.id}
        post={post}
        // users={users}
        // comments={comments}
      />
    ))}
  </div>

);
