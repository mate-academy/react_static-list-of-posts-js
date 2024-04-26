import { PostInfo } from '../PostInfo';

export const PostList = ({ posts: postListProp }) => (
  <div className="PostList">
    {postListProp.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
