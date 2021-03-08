import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      {/* <main>
      <BrowserRouter>
      
      </BrowserRouter>
      </main> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
