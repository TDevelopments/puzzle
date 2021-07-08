import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'

export default function RankingPage() {
  const [userRaking, setUserRaking] = useState([])
  useEffect(() => {
    window.icAPI.callService('getAllUsers', {}, (error, response) => {
      setUserRaking(response.responseJSON)
      console.log(userRaking)
    })
  }, [])
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
              className="p-6 mb-3 mt-3 rounded-lg shadow-lg bg-gradient-to-r from-yellow-800 to-yellow-400"
              style={{ height: '55%', minHeight: '400px', overflow: 'auto' }}
            >
              <h2 className="text-2xl text-center font-bold mb-2 ">Ranking</h2>
              <p className="text-center">Los mejores jugadores</p>
              <div className="mt-8">
                {userRaking.map((user, i) => (
                  <div
                    key={user._id}
                    className="mt-8 flex px-4 py-4 justify-between bg-white dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <div className="rounded-full bg-yellow-400 h-12 w-12 d-flex justify-center">
                        <span className=" text-4xl text-center  text-white dark:text-green-200 place-self-center font-bold">
                          {i + 1}
                        </span>
                      </div>

                      <div className="ml-6 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                        <span>Nombre</span>
                        <span className="mt-2 text-black dark:text-gray-200">
                          {user.name}
                        </span>
                      </div>
                      <div className="ml-6 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                        <span>Carrera</span>
                        <span className="mt-2 text-black dark:text-gray-200">
                          {user.race}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-8 flex flex-col capitalize text-gray-600 dark:text-gray-400">
                        <span>Tiempo record</span>
                        <span className="mt-2 text-green-400 dark:text-green-200">
                          {user.time} s
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
