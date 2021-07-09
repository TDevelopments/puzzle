import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import userImage from "../assets/images/user.png";

export default function AboutUsPage() {
  const [userRaking, setUserRaking] = useState([]);
  useEffect(() => {
    window.icAPI.callService("getAllUsers", {}, (error, response) => {
      setUserRaking(response.responseJSON);
      console.log(userRaking);
    });
  }, []);
  const members = [
    "Sharon Evelyn Eugenio Apaza",
    "Luz Delia Ccami Flores",
    "Erika Valdivia Hernani",
    "Yasmin Daniela Yancapallo Maquito",
    "Eddy Jefferson Quispe Marca",
    "Nicole Alexia Calle Tapia",
    "Guissel Zuleydi Puma Tapia",
    "Luisa Alessandra Saavedra Mamani",
    "Wallace Lutgardo Huamani LLanquecha",
    "María Calachua Chipa",
    "Wallace Fernando Huamani Llanquecha",
    "Concepción Pucho Challco",
    "Alvaro Martin Mercado Loza",
    "Allison Cueva Astulle",
    "Pool Jorhs Ramos Arenas",
    "Ninoska Nikoll Cuba Zegarra",
    "Ivan mauricio Orosco Calizaya",
    "Mayra Liz Castro Rosas",
    "Rosamel Gonzales Chelquetuma",
    "Diana Gabriela Huayllapuma Ayala",
    "Nayely Dahyana Yauri Felipe",
  ];
  function format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }
  return (
    <Fade bottom>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="p-6 mb-3 mt-3 rounded-lg shadow-lg bg-gradient-to-r from-red-800 to-red-400"
              style={{ height: "700px", overflow: "auto" }}
            >
              <h2 className="text-2xl text-center font-bold mb-2 ">
                Sobre nosotros
              </h2>
              <p className=" text-center m-3 ">
                <span className="p-2 rounded-full border-solid border-1">
                  Proyecto realizado por miembros del grupo 2
                </span>
              </p>
              <p className="text-center">Profesor</p>
              <div class="shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                <div className="flex flex-col w-full">
                  <div class="w-full border-gray-100 rounded-t border-b hover:bg-white-100">
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                      <div class="w-6 flex flex-col items-center">
                        <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                          <img class="rounded-full" alt="A" src={userImage} />{" "}
                        </div>
                      </div>
                      <div class="w-full items-center flex">
                        <div class="mx-2 -mt-1  ">
                          Elvis Michael Apaza Rojas
                          <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                            Profesor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-3">Estudiantes</p>
              <div className="">
                <div class="shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                  <div class="flex flex-col w-full">
                    {members.map((member) => (
                      <div class="w-full border-gray-100 rounded-t border-b hover:bg-white-100">
                        <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-6 flex flex-col items-center">
                            <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                              <img
                                class="rounded-full"
                                alt="A"
                                src={userImage}
                              />{" "}
                            </div>
                          </div>
                          <div class="w-full items-center flex">
                            <div class="mx-2 -mt-1  ">
                              <span>{member}</span>
                              <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                Estudiante de fisioterapia y rehabilitación
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
