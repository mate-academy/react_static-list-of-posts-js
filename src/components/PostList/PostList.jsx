import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.length !== 0
      ? posts.map(post => (
          <PostInfo key={post.id} post={post} comments={comments} />
        ))
      : null}
  </div>
);
