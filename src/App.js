import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Header,
  Home,
  About,
  Footer,
  Contact,
  Testimonials,
  Services,
} from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
