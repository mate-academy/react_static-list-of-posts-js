import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ data }) => (
  <div className="PostList">
    {data.map(post => (
      <PostInfo
        key={post.id}
        title={post.title}
        body={post.body}
        user={post.user}
        comments={post.comments}
      />
    ))}
  </div>
);
