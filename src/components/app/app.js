import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../serch-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from "styled-components";

//import "./app.css";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const App = () => {
  const data = [
    {label: 'Going to learn React', important: true, id: 'sdaf'},
    {label: 'That is so good', important: false, id: 'sdf'},
    {label: 'I need a break...', important: false, id: 'sdasdaf'}
  ];
  return (
    <AppBlock>
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </AppBlock>
  )
}

export default App;