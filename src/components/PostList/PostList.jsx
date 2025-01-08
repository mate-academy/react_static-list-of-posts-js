import {PostInfo} from '../PostInfo';

export const PostList = ({ postList }) => {
  return (
    <div className="PostList">
      {postList.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
