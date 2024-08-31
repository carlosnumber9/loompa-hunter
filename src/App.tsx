import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'
import { OompasList } from './components'

function App() {

  return (
    <Provider store={store}>
      <h1>Find your Oompa Loompa</h1>
      <h3>There are more than 100k</h3>
    <OompasList />
    </Provider>
  )
}

export default App
