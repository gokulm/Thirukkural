import Home from './home/home'
import Chapters from './chapters'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './search';

const App = (props: any) => {

  const routes = [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/chapters",
      component: Chapters,
      exact: true
    },
    {
      path: "/chapters/:chapterIndex/kurals",
      component: Home,
      exact: true
    },
    {
      path: "/search",
      component: Search
    }
  ];

  return (
    <div>
      <div className="container">
        <div className="navbar-collapse collapse" id="navbar">
        </div>
      </div>
      <div className="page-header">header</div>

      <div className="container">

        <div className="row">
          <div className="box">
            <div className="col-lg-12">
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
                      <li>
                        <Link to="/search">Search</Link>
                      </li>
                    </ul>
                  </div>

                  <Switch>
                    {routes.map((route, i) => (
                      <RouteWithSubRoutes key={i} {...route} />
                    ))}
                  </Switch>

                  {/* <Switch>
                    <Route path="/home">
                      <Home />
                    </Route>
                    <Route exact path="/chapters">
                      <Chapters />
                    </Route>
                    <Route path="/chapters/:chapterIndex/kurals" component={Home} />
                    <Route path="/search" component={Search} />
                  </Switch> */}
                </Router>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center footer">
              <a href="http://gokulnath.com/#contact" target="_blank">Contact</a> ::
              <a href="http://blogs.gokulnath.com//2010/05/15/Thirukural.aspx" target="_blank">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;