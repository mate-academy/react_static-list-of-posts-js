import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postList, commentsList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo key={post.id} post={post} commentsFull={commentsList} />
    ))}
  </div>
);
