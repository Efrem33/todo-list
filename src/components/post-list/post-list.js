import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css';
import { ListGroup } from "reactstrap";


const PostList = ({posts}) => {

  const elements = posts.map((post) => {
    
    const {id, ...itemProps} = post;
    return (
      <li key={post.id} className="list-group-item">
        <PostListItem {...itemProps} />
        
        {console.log({...itemProps})}
      </li>
    )
  });

  return (
    <ListGroup className="app-list ">
      {elements}
    </ListGroup>
  )
}

export default PostList;