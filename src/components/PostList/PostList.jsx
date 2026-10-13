import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      <div className="PostList__header">
        <h2 className="PostList__title">Posts</h2>
      </div>
      <div className="PostList__body">
        {posts.map(post => (
          <PostInfo key={post.id} post={post} />
        ))}

        <br />
        {posts.length === 0 && (
          <>
            <br />
            <b data-cy="NoPostsMessage">No posts yet</b>
          </>
        )}
      </div>
    </div>
  );
};
