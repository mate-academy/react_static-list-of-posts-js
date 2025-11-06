import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <section className="PostList">
      {posts.map(p => (
        <PostInfo key={p.id} post={p} />
      ))}
    </section>
  );
};
