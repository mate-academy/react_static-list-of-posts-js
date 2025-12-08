import { useState, useEffect } from 'react';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';

import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList/PostList';
// import { CommentList } from './components/CommentList/CommentList';
// import { CommentInfo } from './components/CommentInfo/CommentInfo';

export const App = () => {
  const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [comments, setComments] = useState([]);

  useEffect(() => {
    // console.log('Comments from server:', commentsFromServer);

    const postsWithData = postsFromServer.map(post => {
      const postComments = commentsFromServer.filter(
        comment => comment.postId === post.id,
      );

      // console.log(`Post ${post.id} has ${postComments.length} comments`);

      return {
        ...post,
        user: usersFromServer.find(user => user.id === post.userId),
        comments: postComments,
      };
    });

    setPosts(postsWithData);
  }, []);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
