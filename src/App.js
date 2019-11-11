import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {ThemeToggler} from "./components/ThemeToggler";
import {StoreProvider} from "./contexts/index";

function App() {
  return (
    <StoreProvider>
      <Counter/>
      <ThemeToggler/>
    </StoreProvider>
  );
}

export default App;
