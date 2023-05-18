import './App.css';
import ButtonRound from './components/common/button/ButonRound';
import Button from './components/common/button/Button';
import ButtonContainer from './components/common/button/ButtonContainer';

function App() {
  return (
    <div className="App">
      <Button title="Book an Appoinment" link="/home"/>
      <ButtonRound />
      <ButtonContainer />
    </div>
  );
}

export default App;

