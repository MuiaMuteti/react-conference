import './App.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import Location from './components/Location';
import FoodHotel from './components/FoodHotel';
import ConductCode from './components/ConductCode';
import Schedule from './components/Schedule';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        {/* scroll to top if page changes */}
        <ScrollToTop />

        {/* show navigation bar for all routes */}
        <Route>
          <NavigationBar />
        </Route>
        <main className="content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/food_and_accomodation">
            <FoodHotel />  
          </Route>
          <Route path="/code_of_conduct">
            <ConductCode />
          </Route>        
          <Route path="/not_found">
            <NoMatch />
          </Route>
          <Route>
            <Redirect to="/not_found" />
          </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
