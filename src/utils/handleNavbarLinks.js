import routes from '../router/routes';

const handleNavbarLink = (e, currentRoute) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();

    const linkRoute = e.target.href.slice(e.target.href.lastIndexOf('/') + 1);

    if (currentRoute.includes(linkRoute)) {
      return;
    }

    window.location = '#/' + linkRoute;
    // return routes[linkRoute];
  } else return;
};
export default handleNavbarLink;
