// import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(postWithUser => (
      <PostInfo postWithUser={postWithUser} key={postWithUser.id} />
    ))}
  </div>
);
