
import './App.css';
import { Footer } from './componentes/Footer';
import { Header } from './componentes/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import { Paginas } from './componentes/paginas/Paginas';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Paginas/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
