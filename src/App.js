import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home } from './components';
import Scrolling from './components/Scrolling';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Scrolling />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
