import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ users, comments, posts }) => (
  <div className="PostList">
    {posts.map(post => {
      const data = {
        ...post,
        comments: comments.filter(comment => comment.postId === post.id),
        user: users.find(user => user.id === post.userId),
      };

      return <PostInfo post={data} key={data.id} />;
    })}
  </div>
);
