import React from 'react';
import PostList from './components/PostList';
import './App.scss';

const posts = // Prepared posts array from Step 1

function App() {
    return (
        <div className="App">
            <PostList posts={posts} />
        </div>
    );
}

export default App;
