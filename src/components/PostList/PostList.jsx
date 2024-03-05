import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <>
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {posts.map(post => {
        return <PostInfo post={post} key={post.id} />;
      })}
    </div>
  </>
);
