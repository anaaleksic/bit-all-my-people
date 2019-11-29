//App.js je glavni kao sto je index.html i tu sve pozivam
import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './Main'
import Footer from './components/Footer';

function App() {
  return ( //pozivanje
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )


}

export default App;
