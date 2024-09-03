import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { store } from "./store";
import { LoompaDetail, OompasList } from "./components";
import { Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <Link to={'/'}>
          <img
            className="site-logo"
            alt="App Logo"
            src={import.meta.env.VITE_OOMPA_LOOMPA_ICON_URL}
          /></Link>
          <h3> Oompa Loompa's Crew </h3>
        </header>
        
        <Routes>
          <Route path="/" element={<OompasList />} />
          <Route path="/:loompaId" element={<LoompaDetail />} />
        </Routes>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
