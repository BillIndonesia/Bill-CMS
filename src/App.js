
import './App.css';
import {Provider} from 'react-redux'
import Router from './Router'
import Store from './Redux'
function App() {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
}

export default App;
