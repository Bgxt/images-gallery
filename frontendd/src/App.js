import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/search';




function App() {
  const [word, setWord]=useState("");

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(word)
  }
  console.log(word);

  return (
    <div className="App">
      <Header />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
