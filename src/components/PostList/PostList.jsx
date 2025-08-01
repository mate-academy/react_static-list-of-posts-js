import '../../App.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(({ id, title, body, user, comments }) => (
      <PostInfo
        key={id}
        title={title}
        body={body}
        user={user}
        comments={comments}
      />
    ))}
  </div>
);
