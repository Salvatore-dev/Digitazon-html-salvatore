import { Outlet, Link } from "react-router-dom";

import Selects from "./Select";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="topnav">
        <div>
          <div className="custom-select">
            <Selects chose={'Testamento'}/>
            <Selects chose={"Libro"} />
            <Selects chose={'Capitolo'} />
          </div>
        </div>

        <div className="search-text">
          <label>
            Text input:{" "}
            <input name="myInput" defaultValue="Some initial value" />
          </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
