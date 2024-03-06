import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => {
  const postList = posts.map(post => {
    const user = users.find(person => person.id === post.userId);
    const postComments = comments.filter(comment => comment.postId === post.id);

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return (
    <div className="PostList">
      {postList.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
