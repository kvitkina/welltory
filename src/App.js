import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.page}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
