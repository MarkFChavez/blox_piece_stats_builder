import React, { useState, useEffect } from 'react'
import { encrypt, decrypt } from './commons/base'
import Header from './components/Header'
import ValueBar from './components/ValueBar'

const defaultShareCode = null
const defaultPoint     = 1
const defaultStat      = 1
const defaultHealth    = 100
const defaultEnergy    = 100
const maxStatPoint     = 1350
const totalStatCount   = (maxStatPoint - defaultPoint) * 3

function App () {
  const [total, setTotal]         = useState(totalStatCount)
  const [health, setHealth]       = useState(defaultHealth)
  const [energy, setEnergy]       = useState(defaultEnergy)
  const [point, setPoint]         = useState(defaultPoint)
  const [melee, setMelee]         = useState(defaultStat)
  const [defense, setDefense]     = useState(defaultStat)
  const [sword, setSword]         = useState(defaultStat)
  const [gun, setGun]             = useState(defaultStat)
  const [blox, setBlox]           = useState(defaultStat)
  const [shareCode, setShareCode] = useState(defaultShareCode)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const ciphertext = urlParams.get('s')

    if (ciphertext === null) { return }

    try {
      const plainobj = JSON.parse(decrypt(ciphertext))
      setTotal(plainobj.total)
      setHealth(plainobj.health)
      setEnergy(plainobj.energy)
      setPoint(plainobj.point)
      setMelee(plainobj.melee)
      setDefense(plainobj.defense)
      setSword(plainobj.sword)
      setGun(plainobj.gun)
      setBlox(plainobj.blox)
    } catch(err) {
      console.log("😑 dude....stop this shit you're doing")
    }
  }, [])

  useEffect(() => {
    const plaintext  = JSON.stringify({ 
      total,
      health,
      energy,
      point,
      melee,
      defense,
      sword,
      gun,
      blox,
    })
    const ciphertext = encrypt(plaintext)
    setShareCode(ciphertext)
  }, [total, health, energy, point, melee, defense, sword, gun, blox]);

  const increaseStat = (currentValue, setStat) => {
    let newValue = parseInt(currentValue) + parseInt(point)

    if (!isValidForUpdate(currentValue, newValue)) { return }

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

  const shareUrl = function() {
    const originUrl = window.location.origin
    return shareCode === null ? originUrl : `${originUrl}?s=${encodeURIComponent(shareCode)}`
  }

  const isValidForUpdate = (currentValue, newValue) => {
    let isValid = true

    switch (true) {
      case (parseInt(point) < 0):
      case (!Number.isFinite(newValue)):
      case (newValue > maxStatPoint):
      case (!point):
      case (point > total):
        isValid = false
        break;
      default:
        isValid = true
    }

    return isValid
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
    setShareCode(defaultShareCode)
  }

  return (
    <div className='px-2 md:px-0 mt-2 md:mt-0 min-h-auto md:min-h-screen flex items-center justify-center'>
      <div className='w-auto'>
        <div>
          <Header title='Stats Builder' />

          <div className='w-full mb-4'>
            <ValueBar name='Health' value={health} bgColor='bg-bf-green' fgColor='text-black' />
            <ValueBar name='Energy' value={energy} bgColor='bg-bf-blue' fgColor='text-white' />
          </div>

          <div className="mb-4 w-full">
            <div className='bg-bf-yellow px-2 py-1 inline-block'>
              <span className='text-black suez text-lg'> Share your stats! </span>
            </div>
            <div className='p-2 border-2 border-bf-yellow flex items-center'>
              <span className='mr-2 text-xl' role='img' aria-label='waves at ya'> 👋🏼 </span>
              <input type='text' value={shareUrl()} className='w-full cursor-pointer bg-black text-white text-xl suez appearance-none outline-none' readOnly />
            </div>
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
                  <span className='pr-3 text-white whitespace-no-wrap'>
                    Lv. {melee}
                    {
                      melee === maxStatPoint ? <span className='pr-3 text-white'> (MAX) </span> : ''
                    }
                  </span>
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
                  <span className='pr-3 text-white whitespace-no-wrap'>
                    Lv. {defense}
                    {
                      defense === maxStatPoint ? <span className='pr-3 text-white'> (MAX) </span> : ''
                    }
                  </span>
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
                  <span className='pr-3 text-white whitespace-no-wrap'>
                    Lv. {sword}
                    {
                      sword === maxStatPoint ? <span className='pr-3 text-white'> (MAX) </span> : ''
                    }
                  </span>
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
                  <span className='pr-3 text-white whitespace-no-wrap'>
                    Lv. {gun}
                    {
                      gun === maxStatPoint ? <span className='pr-3 text-white'> (MAX) </span> : ''
                    }
                  </span>
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
                  <span className='text-bf-purple font-bold whitespace-no-wrap'> Blox Fruit </span>
                  <span className='pr-3 text-white whitespace-no-wrap'>
                    Lv. {blox}
                    {
                      blox === maxStatPoint ? <span className='pr-3 text-white'> (MAX) </span> : ''
                    }
                  </span>
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

          <div className="mt-2 flex flex-row-reverse">
            <button className="text-white suez text-lg hover:underline" data-feedback-fish>
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
