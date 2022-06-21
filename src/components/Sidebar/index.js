import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <>
      <div className="sidebarComponent">
        <div className="logoContainer">Divya - Drishti</div>
        <div>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
