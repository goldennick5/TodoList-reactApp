import React from 'react';

function ListItem({post, handleToggle}) {
    const handleClick = (event) => {
        event.preventDefault();
        handleToggle(event.currentTarget.id);
    }

    return (
        <div id={post.id} key={post.id + post.task} value={post.id} onClick={handleClick} className={post.complete ? "post strike" : "post"}>
            {post.task}
        </div>
    );
}

export default ListItem;