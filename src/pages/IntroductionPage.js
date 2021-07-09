import { Row, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAudio from "../hooks/useAudio";
import { Howl } from "howler";

export default function IntroductionPage() {
  const history = useHistory();
  const location = useLocation();

  const sound = new Howl({
    src: ["/media/button2.mp3"],
  });

  return (
    <div style={{ height: "calc(100% - 82px)" }}>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="">
              <Fade top>
                <div>
                  <div class="p-6 mb-3 mt-3 rounded-lg shadow-lg bg-gradient-to-r from-yellow-800 to-yellow-500">
                    <h2 class="text-2xl text-center font-bold mb-2 ">
                      Introducción
                    </h2>
                    <p class="text-center">
                      Teniendo en cuenta que los juegos son manifestaciones
                      innatas de los seres humanos y que le ayudan a tener un
                      mejor desarrollo físico, emocional, social y cognitivo; es
                      decir en su formación integral nos propusimos llevar acabo
                      este proyecto sobre el Test de Millani
                    </p>
                    <button
                      type="submit"
                      class="w-full mt-4 bg-teal-500 px-4 py-2 rounded text-gray-200 font-semibold hover:bg-yellow-500 transition duration-200 each-in-out"
                      onClick={() => {
                        sound.play();
                        history.push({
                          pathname: "/objetive",
                          search: `?_id=${location.state._id}`,
                          state: {
                            _id: location.state._id,
                          },
                        });
                      }}
                    >
                      SIGUIENTE
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
