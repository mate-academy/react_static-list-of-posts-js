import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  if (posts !== 0) {
    return (
      <div className="PostList">
        {posts.map(post => <PostInfo post={post} key={post.id} />)}
      </div>
    );
  }

  return null;
};
