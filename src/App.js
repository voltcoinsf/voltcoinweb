import 'bootstrap/dist/css/bootstrap.min.css';
import './fontface.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import Introduction from './components/Pages/Introduction';
import market from './components/Pages/market';
import solution from './components/Pages/solution';
import Team from './components/Pages/Team';
import tokenomics from './components/Pages/tokenomics';
import Cardsteam from './components/Team/Cardsteam';
import Getintouch from './components/Getintouch/Getintouch';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
     <Header/>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/introduction" component={Introduction}/>
      <Route path="/market" component={market}/>
      <Route path="/solution" component={solution}/>
      <Route path="/Team" component={Team}/>
      <Route path="/tokenomics" component={tokenomics}/>
    </Switch>
      <div class="background_footer">
      <Route exact path="/">
        <section id="section_six">
            <Container>
              <Cardsteam/>
              <Getintouch/>
            </Container>
        </section>
      </Route>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
