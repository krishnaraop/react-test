import { BiUserCircle, BiSearchAlt } from "react-icons/bi";
function TopNavbar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Divya Drishti
            </a>
            <a href="/angular" style={{ textDecoration: "none" }}>
              Angular13
            </a>
            <div>
              <input type="text" placeholder="Search here..." />
              <button>
                <BiSearchAlt />{" "}
              </button>
            </div>

            <div class="navbar-nav">
              <h4>
                <BiUserCircle />
              </h4>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default TopNavbar;
