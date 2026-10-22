import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(person => person.id === post.userId);
      const comment = comments.filter(commt => commt.postId === post.id);

      const postWithData = {
        ...post,
        user,
        comments: comment,
      };

      return <PostInfo post={postWithData} key={post.id} />;
    })}
  </div>
);
