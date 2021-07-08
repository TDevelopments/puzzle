import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  Jumbotron,
} from 'reactstrap'
import Fade from 'react-reveal/Fade'
import Load from '../components/Load'
import { Link, useHistory } from 'react-router-dom'
import user from '../assets/images/user.png'
import { useState, useEffect } from 'react'
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from '@react-spring/web'

export default function HomePage() {
  const races = [
    'Ing. Química',
    'Ing. Ambiental',
    'Ing. de Materiales',
    'Ing. Metalúrgica',
    'Ing. de Industrias Alimentarias',
    'Ing. de Sistemas',
    'Ing. Eléctrica',
    'Ing. Electrónica',
    'Ing. Mecánica',
    'Ing. Industrial',
    'Ing. de Telecomunicaciones',
    'Ing. Geofísica',
    'Ing. Geológica',
    'Ing. de Minas',
    'Ing. Civil',
    'Ing. Sanitaria',
    'Ing. Pesquera',
    'Ciencia de la Computación',
    'Física',
    'Matemáticas',
    'Química',
    'Biología',
    'Ciencias de la Nutrición',
    'Contabilidad',
    'Finanzas',
    'Trabajo Social',
    'Antropología',
    'Turismo y Hotelería',
    'Sociología',
    'Historia',
    'Psicología',
    'Relaciones Industriales',
    'Ciencias de Comunicación',
    'Artes',
    'Filosofía',
    'Literatura y Lingüística',
    'Administración',
    'Marketing',
    'Gestión',
    'Banca y Seguros',
    'Arquitectura',
    'Medicina',
    'Enfermería',
    'Agronomía',
    'Economía',
    'Derecho',
    'Educación',
    'Otro',
  ].sort()
  const [name, setName] = useState('')
  const [user, setUser] = useState({})
  const [start, setStart] = useState(false)
  const [race, setRace] = useState('Administración')
  const [podiumUsers, setPodiumUsers] = useState([])
  const history = useHistory()

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

  function handleSubmit(e) {
    e.preventDefault()
    window.icAPI.callService(
      'registerUser',
      {
        name,
        race,
      },
      (error, response) => {
        if (!error) {
          history.push({
            pathname: '/introduction',
            search: `?_id=${response.responseJSON._id}`,
            state: {
              _id: response.responseJSON._id,
            },
          })
          //setStart(true)
          //setUser(response.responseJSON)
        }
      }
    )
  }

  useEffect(() => {
    window.icAPI.callService('getPodiumUsers', {}, (error, response) => {
      setPodiumUsers(response.responseJSON)
    })
  }, [])

  if (!start) {
    return (
      <div style={{ height: 'calc(100% - 82px)' }}>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-6 col-sm-12 col-lg-6">
              <Fade top>
                <div>
                  <div class="p-6 mb-3 mt-3 rounded-lg shadow-lg bg-gradient-to-r from-teal-800 to-teal-500">
                    <h2 class="text-2xl text-center font-bold mb-2 ">
                      Bienvenido
                    </h2>
                    <p class="text-center">
                      Antes de empezar, bríndanos un poco de tus datos
                    </p>
                  </div>
                </div>
              </Fade>

              <Fade bottom>
                <div>
                  <div class="p-6 rounded-lg shadow-lg bg-gradient-to-r from-teal-800 to-teal-500">
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <Label for="name" className="text-white m-2">
                          Nombre o apodo
                        </Label>
                        <Input
                          type="name"
                          name="name"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          placeholder="Petito123 o John Smith"
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="race" className="text-white m-2">
                          Carrera
                        </Label>
                        <Input
                          type="select"
                          value={race}
                          onChange={(e) => setRace(e.target.value)}
                          name="race"
                          id="race"
                          required
                        >
                          {races.map((race) => (
                            <option key={race}>{race}</option>
                          ))}
                        </Input>
                      </FormGroup>

                      <button
                        type="submit"
                        class="w-full mt-4 bg-red-400 px-4 py-2 rounded text-gray-200 font-semibold hover:bg-yellow-500 transition duration-200 each-in-out"
                      >
                        EMPEZAR!
                      </button>
                    </Form>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-6 col-sm-12 col-lg-6">
              <Fade right>
                <div>
                  <div class="p-6 mb-3 rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-teal-800">
                    <h2 class="text-2xl text-center font-bold mb-2 ">
                      Top Ranking
                    </h2>
                    <p class="text-center">Los mejores jugadores</p>
                    <div class="mt-8">
                      {podiumUsers.map((user, i) => (
                        <div
                          key={user._id}
                          class="mt-8 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer"
                        >
                          <div class="flex justify-between">
                            <div className="rounded-full bg-yellow-400 h-12 w-12 d-flex justify-center">
                              <span class=" text-4xl text-center  text-white dark:text-green-200 place-self-center font-bold">
                                {i + 1}
                              </span>
                            </div>

                            <div class="ml-6 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                              <span>Nombre</span>
                              <span class="mt-2 text-black dark:text-gray-200">
                                {user.name}
                              </span>
                            </div>
                            <div class="ml-6 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                              <span>Carrera</span>
                              <span class="mt-2 text-black dark:text-gray-200">
                                {user.race}
                              </span>
                            </div>
                          </div>
                          <div class="flex">
                            <div class="mr-8 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                              <span>Tiempo record</span>
                              <span class="mt-2 text-green-400 dark:text-green-200">
                                {user.time} s
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <Load userId={user._id} />
  }
}
