import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    const collapseEl = navRef.current?.querySelector(".navbar-collapse");
    if (collapseEl?.classList.contains("show")) {
      // eslint-disable-next-line no-undef
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      bsCollapse?.hide();
    }
  }, [location.pathname]);

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg sticky-top edv-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand edv-brand" to="/">
          EDVANTAGE
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link
                className={`nav-link edv-nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link edv-nav-link ${location.pathname === "/nlevel" ? "active" : ""}`}
                to="/nlevel"
              >
                N Level Class
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link edv-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </a>
              <ul className="dropdown-menu dropdown-menu-end edv-dropdown">
                <li>
                  <Link className="dropdown-item" to="/#reason">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://maps.app.goo.gl/FvGmu6q3Wk6S2V4z8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/#activity">
                    Activities
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
