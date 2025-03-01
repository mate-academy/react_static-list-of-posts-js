import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList'

const getUserById = userId => {
  return usersFromServer.find(user => userId === user.id) || null
}

export const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id)
  }
})

console.log(posts)



export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {posts.map(post => {
      return (
        <PostList post={post} key={post.id}/>
      )
    })}
  </section>
);
