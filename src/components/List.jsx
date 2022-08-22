import React from 'react';
import ListItem from "./ListItem/ListItem";

function List({posts, handleToggle, handleFilter}) {
    return (
        <div style={{display: 'flex', flexDirection: "column", marginTop: "7px"}}>
            {posts.map((post) => {
                return (<ListItem post={post} key={post.id} handleToggle={handleToggle} handleFilter={handleFilter}/>);
            })}
            <button onClick={handleFilter} style={{marginTop: "15px", fontSize: "16px", alignSelf: "start", padding: "7px 10px", }}>Clear Completed tasks</button>
        </div>
    );
}

export default List;