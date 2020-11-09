import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from './App.module.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Products from './components/Products/Products';
import Navbar from './components/Shared/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <div className={classes.gridContainer}>
          <header className={classes.header}>
            <Navbar classes={classes} />
          </header>
          <main>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/products' component={Products} />
          </main>
          <footer className={classes.footer}>
            Footer stuff
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
