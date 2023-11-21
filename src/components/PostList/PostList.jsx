import { PostInfo } from '../PostInfo';

export const PostList = (props) => {
  const { posts } = props;

  return (
    <div className="PostList">
      {posts.map(post => <PostInfo post={post} key={post.id} />)}
    </div>
  );
};
