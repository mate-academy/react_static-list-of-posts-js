import './App.scss';
import { PostList } from './components/PostList';
import { posts } from './utils/Posts';

// ------------------------------------------------------------------------------

// import postsFromServer from './api/posts.json';
// import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';

// function getUserById(userId) {
//   return usersFromServer.find(user => user.id === userId) || null;
// }

// function getCommentsByPostId(postId) {
//   // Тут використовуємо метод 'filter()' оскільки нам потрібні
//   // всі елементи які при умові повертають true, на відмінну від 'find()'.
//   // 'filter()' всегда возвращает массив, даже пустой, а null тут бессмысленно, можно просто:
//   return commentsFromServer.filter(comment => comment.postId === postId);
// }

// export const posts = postsFromServer.map(post => ({
//   ...post,
//   user: getUserById(post.userId),
//   comments: getCommentsByPostId(post.id),
// }));

// ------------------------------------------------------------------------------

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);

// ------------------------------------------------------------------------------

// export const PostList = ({ posts }) => (
//   <div className="PostList">
//     {posts.map(post => (
//       <PostInfo post={post} key={post.id} />
//     ))}
//   </div>
// );

// export const PostInfo = ({ post }) => (
//   <div className="PostInfo">
//     <div className="PostInfo__header">
//       <h3 className="PostInfo__title">{post.title}</h3>

//       <p>
//         {' Posted by  '}

//         <UserInfo user={post.user} />
//       </p>
//     </div>

//     <p className="PostInfo__body">{post.body}</p>

//     <hr />

//     {post.comments.length === 0 ? (
//       <b data-cy="NoCommentsMessage">No comments yet</b>
//     ) : (
//       <CommentList comments={post.comments} />
//     )}
//   </div>
// );

// export const UserInfo = ({ user }) => (
//   <a className="UserInfo" href={`mailto:${user.email}`}>
//     {user.name}
//   </a>
// );

// export const CommentList = ({ comments }) => (
//   <div className="CommentList">
//     {comments.map(comment => (
//       <CommentInfo comment={comment} key={comment.id} />
//     ))}
//   </div>
// );

// export const CommentInfo = ({ comment }) => (
//   <div className="CommentInfo">
//     <div className="CommentInfo__title">
//       <strong className="CommentInfo__name">{comment.name}</strong>

//       {' by '}

//       <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
//         {comment.email}
//       </a>
//     </div>

//     <div className="CommentInfo__body">{comment.body}</div>
//   </div>
// );

// ------------------------------------------------------------------------------
