import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  MemoryRouter,
  Route,
  useParams
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

export default function App() {
  return (
    
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/pages/mon-premier-article">Mon premier article</Link>
            </li>
            <li>
              <Link to="/pages/mon-second-article">Mon second article</Link>
            </li>
          </ul>
        </nav>
        <Route path="/post/:name">
          <Post />
        </Route>
      </main>
  );
}
// Post Page
const Post = () => {
  let { name } = useParams();
  return <h1>{name.replaceAll("-", " ")}</h1>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
