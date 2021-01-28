import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../index.css";

function Planets() {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="row mb-5">
        <h1 className="text-white position-absolute ml-5">
          travel to any planet, right here.
        </h1>
      </div>
      <div className="row">
        {!!store.planets &&
          store.planets.results.map((valor, i) => {
            return (
              <>
                <div className="col-md-3 py-3 mt-2" key={i}>
                  <div className="card w-100 animate__animated animate__fadeIn">
                    <img
                      class="card-img-top"
                      src={`https://starwars-visualguide.com/assets/img/planets/${
                        i + 1
                      }.jpg`}
                      alt="NOT FOUND"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to="#">{valor.name}</Link>
                      </h4>
                      <h4>climate: {valor.climate}</h4>
                      <h5 className="card-text">
                        population: {valor.population}
                      </h5>
                      {/* <!-- Button trigger modal --> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target={"#exampleModal" + i}
                      >
                        Read More
                      </button>
                      <button className="btn btn-lg btn-danger d-block float-right" onClick={() => actions.pushFavorite(valor.name)}>
                        <i class="fas fa-star"></i>
                      </button>
                    </div>
                  </div>
                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id={"exampleModal" + i}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            {valor.name}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <span className="text-danger">climate: </span>{" "}
                          {valor.climate}
                          {", "}{" "}
                          <span className="text-danger">population: </span>{" "}
                          {valor.population}
                          {", "} <span className="text-danger">gravity: </span>{" "}
                          {valor.gravity}
                          {", "} <span className="text-danger">diameter: </span>{" "}
                          {valor.diameter}
                          {", "} <span className="text-danger">terrain: </span>:{" "}
                          {valor.terrain}{" "}
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary btn-lg"
                            data-dismiss="modal"
                          >
                            Close and Keep Searching
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Planets;
