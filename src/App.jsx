import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {postsFromServer.map(posts => {
        const user = usersFromServer.find(users => posts.userId === users.id);
        const comment = commentsFromServer.filter(
          comments => posts.id === comments.postId,
        );

        return (
          <div className="PostInfo">
            <div className="PostInfo__header">
              <h3 className="PostInfo__title">{posts.title}</h3>
              <p>
                {' Posted by  '}

                <a className="UserInfo" href={`mailto:${user.email}`}>
                  {user.name}
                </a>
              </p>
            </div>
            <p className="PostInfo__body">{posts.body}</p>
            {comment.length > 0 && (
              <div className="CommentList">
                {comment.map(com => (
                  <div className="CommentInfo">
                    <div className="CommentInfo__title">
                      <strong className="CommentInfo__name">{com.name}</strong>

                      {' by '}

                      <a
                        className="CommentInfo__email"
                        href={`mailto:${com.email}`}
                      >
                        {com.email}
                      </a>
                    </div>

                    <div className="CommentInfo__body">{com.body}</div>
                  </div>
                ))}
              </div>
            )}
            {comment.length === 0 && (
              <>
                <hr />
                <b data-cy="NoCommentsMessage">No comments yet</b>
              </>
            )}
          </div>
        );
      })}
    </div>
  </section>
);
