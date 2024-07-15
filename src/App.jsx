import React from 'react';
import './App.scss';
import './styles.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsForPost(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsForPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {posts.map(post => (
        <div key={post.id} className="PostInfo">
          <div className="PostInfo__header">
            <h3 className="PostInfo__title">{post.title}</h3>
            <p>
              {'Posted by '}
              <a className="UserInfo" href={`mailto:${post.user.email}`}>
                {post.user.name}
              </a>
            </p>
          </div>
          <div className="PostInfo__body">{post.body}</div>
          <hr />
          {!!post.comments.length ? (
            <div className="CommentList">
              {post.comments.map(comment => (
                <div key={comment.id} className="CommentInfo">
                  <div className="CommentInfo__title">
                    <strong className="CommentInfo__name">
                      {comment.name}
                    </strong>
                    {` by `}
                    <a
                      className="CommentInfo__email"
                      href={`mailto:${comment.email}`}
                    >
                      {comment.email}
                    </a>
                  </div>
                  <div className="CommentInfo__body">{comment.body}</div>
                </div>
              ))}
            </div>
          ) : (
            <b data-cy="NoCommentsMessage">No comments yet</b>
          )}
        </div>
      ))}
    </div>
  </section>
);
export default App;
