import React, { useState } from 'react'

const defaultLevel = 1
const totalStatCount = (defaultLevel - 1) * 3
const defaultPoint = defaultLevel
const defaultStat = defaultLevel

function App () {
  const [level, setLevel] = useState(defaultLevel)
  const [total, setTotal] = useState(totalStatCount)
  const [point, setPoint] = useState(defaultPoint)
  const [melee, setMelee] = useState(defaultStat)
  const [defense, setDefense] = useState(defaultStat)
  const [sword, setSword] = useState(defaultStat)
  const [gun, setGun] = useState(defaultStat)
  const [blox, setBlox] = useState(defaultStat)

  const increaseStat = (currentValue, setFunc) => {
    let newValue = parseInt(currentValue) + parseInt(point)

    if (!point) {
      return
    }
    if (point > total) {
      return
    }

    setFunc(newValue)
    setTotal(total - point)
  }

  const increasePoint = (currentValue, setFunc) => {
    let newValue = parseInt(currentValue)

    setFunc(newValue)
    setLevel(newValue)
    setTotal((newValue - 1) * 3)
  }

  const refundStat = () => {
    setTotal(totalStatCount)
    setPoint(defaultPoint)
    setMelee(defaultStat)
    setDefense(defaultStat)
    setSword(defaultStat)
    setGun(defaultStat)
    setBlox(defaultStat)
    setLevel(defaultLevel)
  }

  return (
    <div className='px-2 md:px-0 mt-2 md:mt-0 min-h-auto md:min-h-screen flex items-center justify-center'>
      <div>
        <div>
          <header className='py-4'>
            <span className='suez text-4xl md:text-6xl text-white block leading-none tracking-wide'>
              {' '}
              Stats Builder
            </span>
            <span className='suez uppercase block text-2xl text-white'>
              for&nbsp;
              <a
                href='https://www.roblox.com/home'
                target='_blank'
                rel='noopener noreferrer'
                className='text-red-700 hover:underline'
              >
                blox piece
              </a>
              &nbsp; 🔥 ⚡️ ☄️
            </span>
          </header>

          <div className='px-4 py-1 flex items-center justify-between bg-black text-2xl border-2 border-b-0'>
            <span className='text-white tracking-wide font-bold'>Level</span>
            <div className='w-1/6'>
              <input
                type='text'
                className='w-full h-12 text-3xl text-center'
                value={level}
                onChange={e => setLevel(e.target.value)}
                onBlur={() => increasePoint(level, setLevel)}
              />
            </div>
          </div>
          <div className='border-2'>
            <div className='px-4 py-1 flex items-center border-b-2 text-center'>
              <span className='flex-1 block text-white text-4xl font-bold'>
                {' '}
                STATS{' '}
              </span>
              <div className='w-1/6'>
                <input
                  type='text'
                  className='w-full h-12 text-4xl text-center'
                  value={point}
                  onChange={e => setPoint(e.target.value)}
                />
              </div>
            </div>

            <div className='text-4xl'>
              <div className='px-4 py-2 flex items-center border-b-2'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-red-700 font-bold'> Melee </span>
                  <span className='pr-3 text-white'> Lv. {melee} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-yellow-400 hover:bg-yellow-500'
                    onClick={() => increaseStat(melee, setMelee)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-blue-700 font-bold'> Defense </span>
                  <span className='pr-3 text-white'> Lv. {defense} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-yellow-400 hover:bg-yellow-500'
                    onClick={() => increaseStat(defense, setDefense)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-green-700 font-bold'> Sword </span>
                  <span className='pr-3 text-white'> Lv. {sword} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-yellow-400 hover:bg-yellow-500'
                    onClick={() => increaseStat(sword, setSword)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-yellow-700 font-bold'> Gun </span>
                  <span className='pr-3 text-white'> Lv. {gun} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-yellow-400 hover:bg-yellow-500'
                    onClick={() => increaseStat(gun, setGun)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-purple-700 font-bold'>
                    {' '}
                    Blox Fruit{' '}
                  </span>
                  <span className='pr-3 text-white'> Lv. {blox} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-yellow-400 hover:bg-yellow-500'
                    onClick={() => increaseStat(blox, setBlox)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>
            </div>

            <div className='px-4 py-1 flex items-center justify-between bg-black text-2xl'>
              <span className='text-white tracking-wide font-bold'>
                {' '}
                Available Points: {total}{' '}
              </span>

              <div>
                <button
                  className='w-full bg-yellow-400 hover:bg-yellow-500'
                  onClick={() => refundStat()}
                >
                  <span className='p-2 font-bold'> Refund </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
