import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function landingPage() {
  return (
    <div className="navbar">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there
        </p>
      </header>
    </div>
  );
}

export default landingPage;
