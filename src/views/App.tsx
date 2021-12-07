import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { routes } from '../common/routes';
import { Col, Container, Row } from 'react-bootstrap';
import i18n from '../common/i18n';
import { useState } from 'react';
import TopMenu from '../components/TopMenu';
import { AppContext } from '../common/app-context';
import { IAppContext } from '../common/interfaces';

const App = (props: any) => {
  const [appContext, setAppContext] = useState<IAppContext>({ IsTamil: true });
  const TopMenuWithRouter = withRouter((props: any) => TopMenu(props));
  console.log('appcontext', appContext);

  const switchLanguage = () => {
    console.log("switching language....");
    if (appContext.IsTamil) {
      setAppContext({ ...appContext, IsTamil: false });
      i18n.changeLanguage('english');
    }
    else {
      setAppContext({ ...appContext, IsTamil: true });
      i18n.changeLanguage('tamil');
    }
  }

  return (
    <AppContext.Provider value={appContext}>
      <Router>
        <TopMenuWithRouter onSwitchLanguage={switchLanguage} />
        {/* <div className="page-header"></div> */}
        <Container>
          <Row>
            <Col>
              <br />
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </Col>
          </Row>
        </Container>
        <footer>
          <Container>
            <Row>
              <Col className="text-center footer">
                <a href="https://www.gokulnath.com/#contact" target="_blank" rel="noreferrer">Contact</a> ::
                <a href="http://blogs.gokulnath.com/2010/05/15/thirukkural" target="_blank" rel="noreferrer">About</a>
              </Col>
            </Row>
          </Container>
        </footer>
      </Router >
    </AppContext.Provider>
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
