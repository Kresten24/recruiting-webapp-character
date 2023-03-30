import { useState } from 'react';
import './App.css';
import CharacterSheet from './components/CharacterSheet'
// import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharacterSheet />
      </section>
    </div>
  );
}

export default App;
