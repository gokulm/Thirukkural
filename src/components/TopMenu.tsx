import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IProps {
    onSwitchLanguage(): void;
}

const TopMenu = (props: IProps) => {
    const { t } = useTranslation();

    const isActiveMenu = (path: string, isExact: boolean = false): boolean => {
        return isExact ? path === window.location.pathname :
            (window.location.pathname as string).startsWith(path);
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-default ">
            <Container>
                <Navbar.Brand href="/">{t('WebsiteHeader')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} active={isActiveMenu("/", true) || isActiveMenu("/chapters/")} to="/">{t('Kurals')}</Nav.Link>
                        <Nav.Link as={Link} active={isActiveMenu("/chapters", true)} to="/chapters">{t('Chapters')}</Nav.Link>
                        <Nav.Link as={Link} active={isActiveMenu("/sections", true)} to="/sections">{t('Sections')}</Nav.Link>
                        <Nav.Link as={Link} active={isActiveMenu("/search")} to="/search">{t('Search')}</Nav.Link>
                    </Nav>
                    <Nav>
                        <span className="switchLanguage" onClick={() => props.onSwitchLanguage()}>{t('Language')}</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopMenu;