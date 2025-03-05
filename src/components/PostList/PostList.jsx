import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(thisPost => (
      <PostInfo
        post={{
          ...thisPost,
          user: users.find(person => person.id === thisPost.userId),
          comments: comments.filter(comment => comment.postId === thisPost.id),
        }}
      />
    ))}
  </div>
);
