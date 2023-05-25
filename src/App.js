import { useEffect } from 'react';
import './App.css';
import Router from './components/Routes/Router';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
useEffect(() => {
  AOS.init();

}, [])

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;

