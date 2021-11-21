import Home from './home/home'
import Chapters from './chapters'
import './App.scss';
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
    <>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a ui-sref="thirukkuralsbychapters( { index: 1 })" className="navbar-brand"><span className="brand"></span></a>
          </div>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li data-toggle="collapse" data-target=".navbar-collapse.in" ng-className="layout.IsActiveMenu(['thirukkuralsbychapters'])"><a ui-sref="thirukkuralsbychapters( { index: 1 })"><span className="brand">Test</span></a></li>
              <li data-toggle="collapse" data-target=".navbar-collapse.in" ng-className="layout.IsActiveMenu(['chapters', 'sectionchapters', 'chaptergroupchapters'])"><a ui-sref="chapters"><span className="brand">Test 2</span></a></li>
              <li data-toggle="collapse" data-target=".navbar-collapse.in" ng-className="layout.IsActiveMenu(['sections'])"><a ui-sref="sections"><span className="brand" ></span></a></li>
              <li data-toggle="collapse" data-target=".navbar-collapse.in" ng-className="layout.IsActiveMenu(['chaptergroups'])"><a ui-sref="chaptergroups"><span className="brand" ></span></a></li>
              <li data-toggle="collapse" data-target=".navbar-collapse.in" ng-className="layout.IsActiveMenu(['search'])"><a ui-sref="search"><span className="brand"></span></a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download" aria-expanded="false"><span className="brand"></span> <span className="caret"></span></a>
                <ul className="dropdown-menu" aria-labelledby="download">
                  <li ng-repeat="lang in layout.AllowedLanguages" data-toggle="collapse" data-target=".navbar-collapse.in" >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page-header"></div>

      <div className="container">

        <div className="row">
          <div className="box">
            <div className="col-lg-12">
              <div>
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
              <a href="https://www.gokulnath.com/#contact" target="_blank">Contact</a> ::
              <a href="http://blogs.gokulnath.com/2010/05/15/thirukkural" target="_blank">About</a>
            </div>
          </div>
        </div>
      </footer>

    </>
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
