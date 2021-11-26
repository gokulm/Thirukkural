import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from '../common/routes';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import i18n from '../common/i18n';
import { useState } from 'react';

const App = (props: any) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('tamil');

  const switchLanguage = () => {
    if (language == 'tamil') {
      setLanguage('english');
      i18n.changeLanguage('english');
    }
    else {
      setLanguage('tamil');
      i18n.changeLanguage('tamil');
    }
  }


  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="lg" className="navbar-default ">
          <Container>
            <Navbar.Brand href="/home">{t('WebsiteHeader')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">{t('Kurals')}</Nav.Link>
                <Nav.Link className="active" href="/chapters">{t('Chapters')}</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={() => switchLanguage()}>{t('Language')}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="page-header"></div>

        <Container>
          <Row>
            <Col>
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
                <a href="https://www.gokulnath.com/#contact" target="_blank">Contact</a> ::
                <a href="http://blogs.gokulnath.com/2010/05/15/thirukkural" target="_blank">About</a>
              </Col>
            </Row>
          </Container>
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
