import routes from '../router/routes';

const handleNavbarLink = (e, currentRoute) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    console.log(e.target.hash);
    console.log(currentRoute);
    const linkRoute = e.target.href.slice([...e.target.href].indexOf('#') + 2);
    console.log(linkRoute);
    if (currentRoute.includes(linkRoute)) {
      return;
    }

    window.location = '#/' + linkRoute;
    // return routes[linkRoute];
  } else return;
};
export default handleNavbarLink;
