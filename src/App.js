import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages';
import Signin from './pages/SignIn';
function App() {
  return (
    <Router>      
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;