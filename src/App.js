import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Home, About } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
