import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="http://www.csillatoth.co.uk/" target="_blank">
            Csilla Toth
          </a>{" "}
          and is {""}
          <a href="https://github.com/csillaout/my-app" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
