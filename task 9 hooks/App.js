import React, { Component } from 'react'
import './App.css';
import PostForm from './Components/PostForm';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';
import HCounter from './Hooks/HCounter';

class App extends Component  {
  render(){
  return (
    <div className="App">
      {/*  <PostForm />*/}
      {/*<PostList />*/}
      <HCounter/>
    </div>
  )
}
}

export default App;
