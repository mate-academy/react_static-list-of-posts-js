import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}
function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
{
  /* <div className="PostList">
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
      deserunt eos nobis asperiores et hic est debitis repellat molestiae optio
      nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates
      et aut adipisci ea maiores voluptas maxime
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
          dolorum voluptas laboriosam quisquam ab totam beatae et aut aliquid
          optio assumenda voluptas velit itaque quidem voluptatem tempore
          cupiditate in itaque sit molestiae minus dolores magni
        </div>
      </div>

      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            odio adipisci rerum aut animi
          </strong>

          {' by '}

          <a className="CommentInfo__email" href="mailto:Nikita@garfield.biz">
            Nikita@garfield.biz
          </a>
        </div>

        <div className="CommentInfo__body">
          quia molestiae reprehenderit quasi aspernatur aut expedita occaecati
          aliquam eveniet laudantium omnis quibusdam delectus saepe quia
          accusamus maiores nam est cum et ducimus et vero voluptates excepturi
          deleniti ratione
        </div>
      </div>
    </div>
  </div>
</div>; */
}
// const posts = [
//   {
//     "id": 1,
//     "userId": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     "user": {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz"
//     },
//     "comments": [
//       {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//       },
//       {
//         "postId": 1,
//         "id": 2,
//         "name": "quo vero reiciendis velit similique earum",
//         "email": "Jayne_Kuhic@sydney.com",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//       },
//       // Решта коментарів для цього поста...
//     ]
//   },
