import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts, comments }) => (
  <div className="Postlist">
    {posts.length !== 0
      ? posts.map(post => (
          <PostInfo key={post.id} post={post} comments={comments} />
          // eslint-disable-next-line prettier/prettier
      ))
      : null}
  </div>
);
