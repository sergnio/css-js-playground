import { NavLink } from "react-router-dom";
import { routes } from "./main";

export default () => {
  return (
    <ul>
      {routes.map((route) => (
        <NavLink to={route.path}>
          <li>{route.name}</li>
        </NavLink>
      ))}
    </ul>
  );
};
