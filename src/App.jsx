import './App.scss';

// import { comment } from 'postcss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostInfo } from './components/PostInfo/PostInfo';

function getUserById(users, id) {
  return users.filter(user => {
    // console.log(user.id, '\t', id);
    return user.id === id;
  });
}

function getComentsById(comments, id) {
  return comments.filter(comment => {
    return comment.postId === id;
  });
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {postsFromServer.map(post => {
        const id = post.userId;
        const resp = getUserById(usersFromServer, id);
        // console.log(resp);
        const user = resp.length ? resp[0] : null;
        // const name = user ? user.name : null;
        // const email = user ? user.email : null;
        // const { body } = post;
        // const userId = user.id;
        const comentsUserById = getComentsById(commentsFromServer, user.id);

        return (
          <div key={post.id} className="PostInfo">
            <PostInfo post={post} email={user.email} name={user.name} />
            {comentsUserById.length === 0 ? (
              <>
                <hr />

                <b data-cy="NoCommentsMessage">No comments yet</b>
              </>
            ) : (
              <>
                <div className="CommentList">
                  {comentsUserById.map(comment => {
                    return (
                      <div key={comment.id} className="CommentInfo">
                        <div className="CommentInfo__title">
                          <strong className="CommentInfo__name">
                            {comment.name}
                          </strong>

                          {' by '}

                          <a
                            className="CommentInfo__email"
                            href={`mailto:${comment.email}`}
                          >
                            {comment.email}
                          </a>
                        </div>

                        <div className="CommentInfo__body">{comment.body}</div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  </section>
);
