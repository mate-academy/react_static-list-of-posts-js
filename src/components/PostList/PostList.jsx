import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <section className="TodoList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </section>
  );
};
