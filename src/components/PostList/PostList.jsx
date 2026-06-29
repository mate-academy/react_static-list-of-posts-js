import React from 'react'; // 1. Добавляем импорт React
import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const postUser = users.find(user => user.id === post.userId);
        const postComments = comments.filter(
          comment => comment.postId === post.id,
        );

        return (
          <React.Fragment key={post.id}>
            <PostInfo post={post} user={postUser} comments={postComments} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
