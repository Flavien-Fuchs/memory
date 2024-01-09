import { useState } from 'react'
import './App.css'
import Deck from './components/Deck'
import Card from './components/Card'


function App() {

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Deck />
    </div>
  )
}

export default App
