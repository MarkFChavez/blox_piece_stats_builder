import React, { useState } from 'react'
import Header from './components/Header'
import ValueBar from './components/ValueBar'

const defaultPoint     = 1
const defaultStat      = 1
const defaultHealth    = 100
const defaultEnergy    = 100
const maxStatPoint     = 1300
const totalStatCount   = (maxStatPoint - defaultPoint) * 3

function App () {
  const [total, setTotal]     = useState(totalStatCount)
  const [health, setHealth]   = useState(defaultHealth)
  const [energy, setEnergy]   = useState(defaultEnergy)
  const [point, setPoint]     = useState(defaultPoint)
  const [melee, setMelee]     = useState(defaultStat)
  const [defense, setDefense] = useState(defaultStat)
  const [sword, setSword]     = useState(defaultStat)
  const [gun, setGun]         = useState(defaultStat)
  const [blox, setBlox]       = useState(defaultStat)

  const increaseStat = (currentValue, setStat) => {
    let newValue = parseInt(currentValue) + parseInt(point)

    if (newValue > maxStatPoint) { return }
    if (!point) { return }
    if (point > total) { return }

    setStat(newValue)
    setTotal(total - point)

    if (setStat === setMelee) {
      const totalEnergy = ((newValue - 1) * 5) + defaultEnergy
      setEnergy(totalEnergy)
    }

    if (setStat === setDefense) {
      const totalHealth = ((newValue - 1) * 5) + defaultHealth
      setHealth(totalHealth)
    }
  }

  const resetStat = () => {
    setTotal(totalStatCount)
    setHealth(defaultHealth)
    setEnergy(defaultEnergy)
    setPoint(defaultPoint)
    setMelee(defaultStat)
    setDefense(defaultStat)
    setSword(defaultStat)
    setGun(defaultStat)
    setBlox(defaultStat)
  }

  return (
    <div className='px-2 md:px-0 mt-2 md:mt-0 min-h-auto md:min-h-screen flex items-center justify-center'>
      <div>
        <div>
          <Header title='Stats Builder' />

          <div className='w-full mb-6'>
            <ValueBar name='Health' value={health} bgColor='bg-bf-green' />
            <ValueBar name='Energy' value={energy} bgColor='bg-bf-blue' />
          </div>

          <div className='border-2 border-bf-yellow'>
            <div className='px-4 py-1 flex items-center border-bf-yellow border-b-2 text-center'>
              <span className='flex-1 block text-white text-4xl font-bold'>
                STATS
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
              <div className='px-4 py-2 flex items-center border-b-2 border-bf-yellow bg-bf-grey'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-bf-red font-bold'> Melee </span>
                  <span className='pr-3 text-white'> Lv. {melee} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-bf-yellow hover:bg-yellow-500'
                    onClick={() => increaseStat(melee, setMelee)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2 border-bf-yellow bg-bf-grey'>
                <div className='flex-1 flex justify-between'>
                  <span className='font-bold text-bf-blue'> Defense </span>
                  <span className='pr-3 text-white'> Lv. {defense} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-bf-yellow hover:bg-yellow-500'
                    onClick={() => increaseStat(defense, setDefense)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-yellow border-b-2 border-bf-yellow bg-bf-grey'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-bf-green font-bold'> Sword </span>
                  <span className='pr-3 text-white'> Lv. {sword} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-bf-yellow hover:bg-yellow-500'
                    onClick={() => increaseStat(sword, setSword)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2 border-bf-yellow bg-bf-grey'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-bf-yellow font-bold'> Gun </span>
                  <span className='pr-3 text-white'> Lv. {gun} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-bf-yellow hover:bg-yellow-500'
                    onClick={() => increaseStat(gun, setGun)}
                  >
                    <span className='font-bold'> + </span>
                  </button>
                </div>
              </div>

              <div className='px-4 py-2 flex items-center border-b-2 border-bf-yellow bg-bf-grey'>
                <div className='flex-1 flex justify-between'>
                  <span className='text-bf-purple font-bold'> Blox Fruit </span>
                  <span className='pr-3 text-white'> Lv. {blox} </span>
                </div>

                <div className='w-1/6'>
                  <button
                    className='w-full bg-bf-yellow hover:bg-yellow-500'
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
                  className='w-ful bg-bf-yellow hover:bg-yellow-500'
                  onClick={() => resetStat()}
                >
                  <span className='p-2 font-bold'> Reset </span>
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
