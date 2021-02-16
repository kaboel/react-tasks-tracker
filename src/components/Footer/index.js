import { Link, useLocation as Location } from "react-router-dom";

const Footer = () => {
  const location = Location();

  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {location.pathname === "/" ? (
        <Link to="/about">About</Link>
      ) : (
        <Link to="/">Go Back</Link>
      )}
    </footer>
  );
};

export default Footer;
