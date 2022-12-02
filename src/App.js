import Header from './components/Header';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div className="App">

      <Header setCurrentPage= {setCurrentPage}/>
    </div>
  );
}

export default App;
