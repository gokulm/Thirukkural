import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from '../common/i18n';

const TopMenu = (props: any) => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState('tamil');
    const { location } = props; 

    const switchLanguage = () => {
        if (language === 'tamil') {
          setLanguage('english');
          i18n.changeLanguage('english');
        }
        else {
          setLanguage('tamil');
          i18n.changeLanguage('tamil');
        }
      }
    
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-default ">
          <Container>
            <Navbar.Brand href="/">{t('WebsiteHeader')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" activeKey={location.pathname}>
                <Nav.Link href="/">{t('Kurals')}</Nav.Link>
                <Nav.Link href="/chapters">{t('Chapters')}</Nav.Link>
              </Nav>
              <Nav>
                <span className="switchLanguage" onClick={() => switchLanguage()}>{t('Language')}</span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default TopMenu;