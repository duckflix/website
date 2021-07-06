import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header></header>
      <section className="landing-body">
        <h1>Duckflix
          <img src='assets/images/temp-duckflix-logo.png' className="App-logo" alt="logo" />
        </h1>
        <p>
          Coming soon to a home theatre near you...
          <br></br>
          an open source, minimalist stack for private media consumption.
        </p>
      </section>
      <footer>
        <a href='https://github.com/duckflix'>
          <p><i className='githubIcon'><FontAwesomeIcon icon={faGithub} /></i>
          Find us on Github!</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
