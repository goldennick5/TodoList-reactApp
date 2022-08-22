import './App.css';
import Form from './components/Form';
import List from './components/List'
import data from './data.json'
import React, {useState} from 'react';

function App() {
    const [posts, setPosts] = useState(data)

    const newPost = (input) => {
        let copy = [...posts];
        copy = [...copy, {id: posts.length + 1, task: input, complete: false}];
        setPosts(copy);
    }

    const handleToggle = (id) => {
        let mapped = posts.map((task) => {
            return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
        });
        setPosts(mapped);
    }

    const handleFilter = () => {
        let filter = posts.filter((task) => {
            return !task.complete;
        });
        setPosts(filter);
    }

    return (
        <main className="App">
            <Form newPost={newPost} />
            <List posts={posts} handleToggle={handleToggle} handleFilter={handleFilter}/>
        </main>
    );
}

export default App;
