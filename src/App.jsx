import { useState } from 'react'
import Header from './components/header/Header';
import Timer from './components/timer/Timer';
import './app.css';
import Footer from './components/footer/Footer';

function App() {

  return (
    <main>
      <Header />
      <Timer />
      <Footer />
    </main>
  )
}

export default App;
