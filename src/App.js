// BrowserRouter このコンポーネントで囲った配下でルーティングを有効にする
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
      <br />
      <div className="App"></div>
      <Router />
    </BrowserRouter>
  );
}
