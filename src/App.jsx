import './App.scss';

// import { comment } from 'postcss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

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
      {/* <div className="PostList">
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">qui est esse</h3>

          <p>
            {' Posted by  '}

            <a className="UserInfo" href="mailto:Sincere@april.biz">
              Leanne Graham
            </a>
          </p>
        </div>

        <p className="PostInfo__body">
          est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
          dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
          reiciendis qui aperiam non debitis possimus qui neque nisi nulla
        </p>

        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>

      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">doloremque illum aliquid sunt</h3>

          <p>
            {' Posted by  '}

            <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
              Patricia Lebsack
            </a>
          </p>
        </div>

        <p className="PostInfo__body">
          deserunt eos nobis asperiores et hic est debitis repellat molestiae
          optio nihil ratione ut eos beatae quibusdam distinctio maiores earum
          voluptates et aut adipisci ea maiores voluptas maxime
        </p>

        <div className="CommentList">
          <div className="CommentInfo">
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">pariatur omnis in</strong>

              {' by '}

              <a
                className="CommentInfo__email"
                href="mailto:Telly_Lynch@karl.co.uk"
              >
                Telly_Lynch@karl.co.uk
              </a>
            </div>

            <div className="CommentInfo__body">
              dolorum voluptas laboriosam quisquam ab totam beatae et aut
              aliquid optio assumenda voluptas velit itaque quidem voluptatem
              tempore cupiditate in itaque sit molestiae minus dolores magni
            </div>
          </div>

          <div className="CommentInfo">
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">
                odio adipisci rerum aut animi
              </strong>

              {' by '}

              <a
                className="CommentInfo__email"
                href="mailto:Nikita@garfield.biz"
              >
                Nikita@garfield.biz
              </a>
            </div>

            <div className="CommentInfo__body">
              quia molestiae reprehenderit quasi aspernatur aut expedita
              occaecati aliquam eveniet laudantium omnis quibusdam delectus
              saepe quia accusamus maiores nam est cum et ducimus et vero
              voluptates excepturi deleniti ratione
            </div>
          </div>
        </div>
      </div>
    </div> */}

      {/* {console.log(postsFromServer)} */}

      {postsFromServer.map(post => {
        const id = post.userId;
        const resp = getUserById(usersFromServer, id);
        // console.log(resp);
        const user = resp.length ? resp[0] : null;
        const name = user ? user.name : null;
        const email = user ? user.email : null;
        const { body } = post;
        const userId = user.id;
        // console.log(postId);
        // console.log(name);
        // console.log(userId);
        // const posts = getPostsById(postsFromServer, postId);
        // console.log(postsFromServer[0]);
        const comentsUserById = getComentsById(commentsFromServer, userId);

        // console.log(comentsUserById);
        return (
          <div className="PostInfo" key={post.id}>
            <div className="PostInfo__header">
              <h3 className="PostInfo__title">{post.title}</h3>
              <p>
                {' Posted by  '}
                <a className="UserInfo" href={`mailto:${email}`}>
                  {/* {usersFromServer[post.userId].name} */}
                  {name}
                </a>
              </p>
            </div>

            <p className="PostInfo__body">{body}</p>

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
