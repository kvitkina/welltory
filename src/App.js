import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
