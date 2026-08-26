import { PostInfo } from '../PostInfo';

const MakePostInfo = posts =>
  posts.map(post => <PostInfo post={post} key={post.id} />);

export const PostList = ({ posts }) => (
  <div className="PostList">{MakePostInfo(posts)}</div>
);
