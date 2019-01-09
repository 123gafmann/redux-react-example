import React, { Component } from 'react';
import './App.css';

import Posts from './components/posts';
import SubmitPost from './components/submit-post'

import { Provider } from 'react-redux'
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Post Online
            </p>
          </header>
          <SubmitPost />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
