import React from 'react';
import Header from './common/Header/Header';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';

function App() {

  return <div className={'h-full'}>
    <Header/>
    <div className={'mx-auto max-w-6xl w-full py-5 px-2'}>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
      </HashRouter>
    </div>
  </div>
}

export default App;
