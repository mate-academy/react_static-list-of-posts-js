// 1. IMPORTS
import './App.scss';
import { PostList } from './components/PostList/PostList';


// 2. O CÉREBRO (Juntar os dados antes do componente renderizar)


// 3. O COMPONENTE (A renderização na tela)
export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList />
  </section>
);