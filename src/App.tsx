import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from './common/routes';

const App = (props: any) => {
  const { t } = useTranslation();


  return (
    <>
      <Router>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/home" className="navbar-brand">{t('WebsiteHeader')}</Link>
            </div>
            {/* <div className="navbar-collapse collapse"> */}
            <div className="navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/home">{t('WebsiteHeader')}</Link>
                </li>
                <li>
                  <Link to="/chapters">Chapters</Link>
                </li>
                <li><a ui-sref="sections"><span className="brand" ></span></a></li>
                <li><a ui-sref="chaptergroups"><span className="brand" ></span></a></li>
                <li><a ui-sref="search"><span className="brand"></span></a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download" aria-expanded="false"><span className="brand"></span> <span className="caret"></span></a>
                  <ul className="dropdown-menu" aria-labelledby="download">
                    <li ng-repeat="lang in layout.AllowedLanguages" >
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

      </Router>
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
