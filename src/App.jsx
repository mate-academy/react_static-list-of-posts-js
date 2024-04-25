import './App.scss';

// import { comment } from 'postcss';
// import { comment } from 'postcss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
// import { PostInfo } from './components/PostInfo/PostInfo';
// import { CommentInfo } from './components/CommentInfo/CommentInfo';
import { PostList } from './components/PostList/PostList';

// function getUserById(users, id) {
//   return users.filter(user => {
//     return user.id === id;
//   });
// }

// function getComentsById(comments, id) {
//   return comments.filter(comment => {
//     return comment.postId === id;
//   });
// }

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {/* <div className="PostList"> */}
    {/* {postsFromServer.map(post => {
        const id = post.userId;
        const resp = getUserById(usersFromServer, id);
        const user = resp.length ? resp[0] : null;
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
                    return <CommentInfo key={comment.id} comment={comment} />;
                  })}
                </div>
              </>
            )}
          </div>
        );
      })} */}
    {/* </div> */}
    <PostList
      posts={postsFromServer}
      comments={commentsFromServer}
      users={usersFromServer}
    />
  </section>
);
