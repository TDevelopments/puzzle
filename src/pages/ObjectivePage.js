import { Row, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Howl } from "howler";

export default function ObjectivePage() {
  const sound = new Howl({
    src: ["/media/button2.mp3"],
  });
  const history = useHistory();
  const location = useLocation();
  return (
    <div style={{ height: "calc(100% - 82px)" }}>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-12 col-sm-12 col-lg-8">
            <div className="">
              <Fade top>
                <div>
                  <div class="p-6 mb-3 mt-3 rounded-lg shadow-lg bg-gradient-to-r from-red-800 to-red-400">
                    <div className="d-flex">
                      <div className="p-3 w-1/2">
                        <h2 class="text-2xl text-center font-bold mb-2 ">
                          Objetivos
                        </h2>
                        <p class="text-center">
                          <ul className="list-disc">
                            <li>
                              Estimula el desarrollo de las habilidades motoras
                              de la persona y la capacidad lógica.
                            </li>
                            <li>Generar satisfacción al culminar el juego.</li>
                            <li>
                              Contribuir al refuerzo y estimulación de los
                              conocimientos teóricos.
                            </li>
                            <li>
                              Impulsar la recreación mental para aplicación en
                              prácticas.
                            </li>
                            <li>Desarrollo de la coordinación cognitiva.</li>
                            <li>
                              Mayor adaptación hacia los procesos virtuales en
                              el aprendizaje.
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div className="p-3 w-1/2">
                        <h2 class="text-2xl text-center font-bold mb-2 ">
                          Reglas
                        </h2>
                        <p class="text-center">
                          Resuelve cada puzzle, responde correctamente cada
                          pregunta hasta superar todos los niveles, entre más
                          rápido lo hagas mejor será tu puntuación, y sobre todo
                          no olvides que es un juego y puedes equivocarte.
                          Suerte!
                        </p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="w-full mt-4 bg-teal-500 px-4 py-2 rounded text-gray-200 font-semibold hover:bg-yellow-500 transition duration-200 each-in-out"
                      onClick={() => {
                        sound.play();
                        history.push({
                          pathname: "/loading",
                          search: `?_id=${location.state._id}`,
                          state: {
                            _id: location.state._id,
                          },
                        });
                      }}
                    >
                      EMPEZAR
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
