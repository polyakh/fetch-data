//region Global Imports
import React from 'react';
//endregion

import logo from './logo.svg';
import './App.css';
import { useDataApi } from '~hooks';

function App() {
  const [{ data, isLoading }, setUrl, _] = useDataApi()
  console.log(data);

  // if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p onClick={() => setUrl('1212')}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*<pre>{JSON.stringify(data.records, null, 2)}</pre>*/}
      </header>
    </div>
  );
}

export default App;
