import './App.scss';
import { PostList } from './components/PostList';

export const App = () => {
  const postsFromServer = [
    {
      id: 1,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit...',
      userId: 1,
      user: {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
      },
      comments: [
        {
          id: 1,
          name: 'pariatur omnis in',
          email: 'Telly_Lynch@karl.co.uk',
          body: 'dolorum voluptas laboriosam quisquam ab totam beatae...',
        },
        {
          id: 2,
          name: 'odio adipisci rerum aut animi',
          email: 'Nikita@garfield.biz',
          body: 'quia molestiae reprehenderit quasi aspernatur aut expedita...',
        },
      ],
    },
  ];

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsFromServer} />
    </section>
  );
};
