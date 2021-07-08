import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import userImage from '../assets/images/user.png'

export default function AboutUsPage() {
  const [userRaking, setUserRaking] = useState([])
  useEffect(() => {
    window.icAPI.callService('getAllUsers', {}, (error, response) => {
      setUserRaking(response.responseJSON)
      console.log(userRaking)
    })
  }, [])
  const members = [
    'Sharon Evelyn Eugenio Apaza',
    'Luz Delia Ccami Flores',
    'Erika Valdivia Hernani',
    'Yasmin Daniela Yancapallo Maquito',
    'Eddy Jefferson Quispe Marca',
    'Nicole Alexia Calle Tapia',
    'Guissel Zuleydi Puma Tapia',
    'Luisa Alessandra Saavedra Mamani',
    'Wallace lutgardo Huamani LLanquecha',
    'María Calachua Chipa',
    'Wallace Fernando Huamani Llanquecha',
    'Concepción pucho challco',
    'Alvaro Martin Mercado Loza',
    'Allison Cueva Astulle',
    'Pool Jorhs Ramos Arenas',
    'Ninoska nikoll Cuba zegarra',
    'Ivan mauricio Orosco  calizaya',
    'Mayra Liz Castro Rosas',
    'Rosamel Gonzales Chelquetuma',
    'Diana Gabriela Huayllapuma Ayala',
    'Nayely Dahyana Yauri Felipe',
  ]
  function format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600)
    var mins = ~~((time % 3600) / 60)
    var secs = ~~time % 60

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = ''
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '')
    ret += '' + secs
    return ret
  }
  return (
    <Fade bottom>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="p-6 mb-3 mt-3 rounded-lg shadow-lg bg-gradient-to-r from-red-800 to-red-400"
              style={{ height: '65%', overflow: 'auto' }}
            >
              <h2 className="text-2xl text-center font-bold mb-2 ">
                Sobre nosotros
              </h2>
              <p className="text-center">Miembros</p>
              <div className="mt-8">
                <div class="shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                  <div class="flex flex-col w-full">
                    <div class="w-full border-gray-100 rounded-t border-b hover:bg-white-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div class="w-6 flex flex-col items-center">
                          <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                            <img class="rounded-full" alt="A" src={userImage} />{' '}
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
                    {members.map((member) => (
                      <div class="w-full border-gray-100 rounded-t border-b hover:bg-white-100">
                        <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-6 flex flex-col items-center">
                            <div class="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                              <img
                                class="rounded-full"
                                alt="A"
                                src={userImage}
                              />{' '}
                            </div>
                          </div>
                          <div class="w-full items-center flex">
                            <div class="mx-2 -mt-1  w-1/2 ">
                              {member}
                              <div class="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                                Estudiante de fisioterapia y rahebilitación
                              </div>
                            </div>
                            <div class="w-1/2 flex">
                              <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                                  Grupo 2
                                </div>
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
  )
}