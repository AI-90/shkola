import logo from './logo.svg';
import './App.css';
import Foot from './footer';




function Appt() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         hhhtt Edit <code>src/App.js</code> and save to reload.
        </p>
        <Foot />
        <Foot/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Appt;
