const NavLink = (route) => {
  const view = `
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="${route}">${route}</a>
</li>`;
  return view;
};
export default NavLink;
