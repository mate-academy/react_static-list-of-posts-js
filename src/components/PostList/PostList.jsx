import { PostInfo } from '../PostInfo';

export const PostList = ({ postlist }) => (
  <div className="PostList">
    {postlist.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
