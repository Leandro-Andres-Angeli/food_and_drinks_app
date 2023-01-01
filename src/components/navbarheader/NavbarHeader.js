import Nav from '../../classes/Nav';
import routes from '../../Router/navbarRoutes';

const NavbarHeader = new Nav();
const routeKeys = Object.keys(routes).filter((route) => route !== 'error');
console.log(routeKeys);

NavbarHeader.addLinks(routeKeys);

export default NavbarHeader;
