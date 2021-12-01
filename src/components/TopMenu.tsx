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

    const isActiveMenu = (path: string, isExact: boolean = false): boolean => {
        return isExact ? path === location.pathname :
            (location.pathname as string).startsWith(path);
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-default ">
            <Container>
                <Navbar.Brand href="/">{t('WebsiteHeader')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link active={isActiveMenu("/", true) || isActiveMenu("/chapters/")} href="/">{t('Kurals')}</Nav.Link>
                        <Nav.Link active={isActiveMenu("/chapters", true)} href="/chapters">{t('Chapters')}</Nav.Link>
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