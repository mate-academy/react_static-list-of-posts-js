import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postsList }) => (
  <div className="PostList">
    {postsList.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
