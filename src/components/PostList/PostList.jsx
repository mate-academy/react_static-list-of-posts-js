import { PostInfo } from '../PostInfo';

export const PostList = ({ postList }) => (
  <>
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {postList.map(post => {
        return <PostInfo post={post} key={post.id} />;
      })}
    </div>
  </>
);
