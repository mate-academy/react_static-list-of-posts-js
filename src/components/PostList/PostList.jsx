import { PostInfo } from "../PostInfo/PostInfo";

export const PostList = ({ post }) => (
  <section className="App">
    <h3 className="App__title">Static list of posts</h3>
    {post.map((r) => (
       <PostInfo post={r} key={r.id}/>
    ))}
  </section>
);


  