/* eslint-disable no-console */
import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  // console.log(`meu teste: ${posts.length}`);

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
