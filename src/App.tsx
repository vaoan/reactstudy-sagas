import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import router from "configs/routes";

function App() {
  const [t] = useTranslation(["general"]);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {t("Hello")}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
