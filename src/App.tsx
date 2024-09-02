import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { OompasList } from "./components";
import { FilterInput } from "./components/FilterInput/FilterInput";

function App() {
  return (
    <Provider store={store}>
      <header>
        <img
          className="site-logo"
          alt="App Logo"
          src={import.meta.env.VITE_OOMPA_LOOMPA_ICON_URL}
        />
        <h3> Oompa Loompa's Crew </h3>
      </header>
      <FilterInput />
      <h1>Find your Oompa Loompa</h1>
      <h3>There are more than 100k</h3>
      <OompasList />
    </Provider>
  );
}

export default App;
