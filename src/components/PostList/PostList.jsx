import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}

    <CommentList comments={comments} />
  </div>
);
