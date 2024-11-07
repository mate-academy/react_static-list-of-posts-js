import './App.scss';
import { PostInfo } from './components/PostInfo/PostInfo';

 import postsFromServer from './api/posts.json';
 import commentsFromServer from './api/comments.json';
 import usersFromServer from './api/users.json';

 function getUserByUserId(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

 export const posts = postsFromServer.map(post=> ({...post,
  user: getUserByUserId(post.userId),
  comments: getCommentByPostId(post.id)
 }))
export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
{
posts && posts.map(post => (
  <PostInfo key={post.id} post={post} />
))
}
    </div>
  </section>
);
