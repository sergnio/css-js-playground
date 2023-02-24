import { NavLink } from "react-router-dom";
import { routes } from "./main";

export default () => {
  return (
    <ul>
      <NavLink to={routes.home}>
        <li>Home</li>
      </NavLink>
      <NavLink to={routes.overflow}>
        <li>Overflower</li>
      </NavLink>
    </ul>
  );
};
