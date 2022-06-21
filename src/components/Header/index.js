import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavLink,
  NavbarText,
} from "reactstrap";

import icon from "../../assets/img/download.png";

const HeaderComponent = () => {
  const avatar = localStorage.getItem("name");
  return (
    <>
      <div className="header">
        <div>
          <Navbar color="light" expand="md" light>
            {/* <Collapse navbar>
              <Nav className="me-auto" navbar></Nav>
              <NavbarText>
                <div class="media align-items-center flex">
                  <img
                    style={{ width: '30px', height: '30px' }}
                    src={icon}
                    alt="avatar"
                  />
                  {avatar}
                </div>
              </NavbarText>{' '}
              {''}
              <NavLink href="/" className="text-right">
                Logout!
              </NavLink>
            </Collapse> */}
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
