import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul class="navBar">
          <li class="navItem">
            <Link to="/">Home</Link>
          </li>
          <li class="navItem">
            <Link to="/purchaseDetails">Purchase Details</Link>
          </li>
          <li class="navItem">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;