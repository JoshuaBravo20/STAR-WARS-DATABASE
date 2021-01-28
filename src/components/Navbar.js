import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-responsive">
      <div className="container">
        <div className="row px-5">
          <div className="col-md-3">
            <Link className="navbar-brand text-white ml-5" to="/">
              <img
                src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png"
                id="headImg"
              />
              <i class="fas fa-globe-americas text-white"></i> UNIVERSE
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item lead px-2 rounded bg-warning mx-3">
                <Link className="nav-link active" to="/characters">
                <i class="fas fa-user"></i> CHARACTERS
                </Link>
              </li>
              <li className="nav-item lead px-2 rounded bg-warning mx-3">
                <Link className="nav-link active" to="/planets">
                <i class="fas fa-globe-americas"></i> PLANETS
                </Link>
              </li>
              <li className="nav-item lead px-2 rounded bg-warning mx-3">
                <Link className="nav-link active" to="/vehicles">
                <i class="fas fa-space-shuttle"></i> VEHICLES
                </Link>
              </li>
              <li className="nav-item lead rounded bg-orange mx-3 favs">
                <Link className="nav-link active favs" to="/favorites">
                <i class="fas fa-star"></i> FAVORITES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
