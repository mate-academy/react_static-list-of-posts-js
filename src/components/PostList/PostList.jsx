import { PostInfo } from '../PostInfo';

export const PostList = ({ postList, users, comments }) => (
  <>
    <div className="PostList">
      {postList.map(posts => (
        <PostInfo
          posts={posts}
          id={posts.id}
          users={users}
          comments={comments}
        />
      ))}
    </div>
  </>
);
