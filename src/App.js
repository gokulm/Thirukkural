import Home from './home/home'
import Chapters from './chapters'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const routes = [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/home",
      component: Home
    }
  ];

  return (
    <div>
      <div class="container">
        <div class="navbar-collapse collapse" id="navbar">
        </div>
      </div>
      <div class="page-header">header</div>

      <div class="container">

        <div class="row">
          <div class="box">
            <div class="col-lg-12">
              <div ui-view>
                <Router>
                  <div>
                    <ul>
                      <li>
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/chapters">Chapters</Link>
                      </li>
                    </ul>
                  </div>
                  <Switch>
                    <Route path="/home">
                      <Home />
                    </Route>
                    <Route exact path="/chapters">
                      <Chapters />
                    </Route>
                    <Route path="/chapters/:chapterIndex/kurals" component={Home} />
                      {/* <Home />
                    </Route> */}
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center footer">
              <a href="http://gokulnath.com/#contact" target="_blank">Contact</a> ::
              <a href="http://blogs.gokulnath.com//2010/05/15/Thirukural.aspx" target="_blank">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
