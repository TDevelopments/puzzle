import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

//import '../assets/css/plugin.css'
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import logo from "../assets/images/fisioterapia.png";

export default function Navbar() {
  return (
    <header className="header">
      {/*<!-- Top Header Area Start -->*/}

      {/* <!-- Top Header Area End --> */}
      {/* <!--Main-Menu Area Start--> */}
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src="assets/images/logo.png" alt="" />
                  <h1>INALLIM</h1>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#main_menu"
                  aria-controls="main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse fixed-height"
                  id="main_menu"
                >
                  <ul className="navbar-nav ml-auto">
                    {/*
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                        <div className="mr-hover-effect"></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="index.html">
                            {' '}
                            <i className="fa fa-angle-double-right"></i>Home 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index2.html">
                            {' '}
                            <i className="fa fa-angle-double-right"></i> Home 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/ranking">
                        RANKING
                        <div className="mr-hover-effect"></div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about-us">
                        SOBRE NOSOTROS
                        <div className="mr-hover-effect"></div>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    to="/"
                    className="mybtn1"
                    data-toggle="modal"
                    data-target="#signin"
                  >
                    EMPEZAR
                  </Link>
                  <div className="rounded-lg shadow-lg bg-white ml-4">
                    <img alt="logo" width="60px" src={logo} />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Main-Menu Area Start--> */}
      {/* V
    <nav className="container mt-3">
      <Row>
        <Col md="3" sm="6" className="d-flex align-items-center">
          <h1>INALLIM</h1>
        </Col>
        <Col md="4" sm="6" className="d-flex align-items-center">
          <h6>Si tu quieres saber con mi Millani tú tienes que aprender</h6>
        </Col>
        <Col md="3" className="ml-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
            alt="Girl in a jacket"
            width="75"
            height="75"
            className=" img-fluid mx-auto"
          />
        </Col>
      </Row>
    </nav>
      */}
    </header>
  );
}
