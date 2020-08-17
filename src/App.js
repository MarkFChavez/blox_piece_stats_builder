import React, { useState } from 'react';

const totalStatCount = 1250 * 3
const defaultPoint   = 1
const defaultStat    = 1

function App() {

  const [total, setTotal]     = useState(totalStatCount);
  const [point, setPoint]     = useState(defaultPoint);
  const [melee, setMelee]     = useState(defaultStat);
  const [defense, setDefense] = useState(defaultStat);
  const [sword, setSword]     = useState(defaultStat);
  const [gun, setGun]         = useState(defaultStat);
  const [blox, setBlox]       = useState(defaultStat);

  const increaseStat = (currentValue, setFunc) => {
    let newValue = parseInt(currentValue) + parseInt(point)

    if (point > total) {
      return
    }

    setFunc(newValue)
    setTotal(total - point)
  }

  const refundStat = () => {
    setTotal(totalStatCount)
    setPoint(defaultPoint)
    setMelee(defaultStat)
    setDefense(defaultStat)
    setSword(defaultStat)
    setGun(defaultStat)
    setBlox(defaultStat)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <div>
          <header className="py-4">
            <span className="suez text-6xl block leading-none"> Blox Piece </span>
            <span className="suez uppercase block"> 
              by <a href="https://www.roblox.com/home" target="_blank" rel="noopener noreferrer" className="underline">roblox</a> 
            </span>
          </header>

          <div className="border-2">
            <div className="px-4 py-1 flex items-center bg-black">
              <span className="flex-1 block text-white text-4xl font-bold"> Stats </span>
              <div className="w-1/6">
                <input 
                  type="text" 
                  className="w-full h-12 text-4xl text-center"
                  value={point} onChange={(e) => setPoint(e.target.value)} />
              </div>
            </div>

            <div className="text-4xl">
              <div className="px-4 py-2 flex items-center"> 
                <div className="flex-1 flex justify-between">
                  <span className="text-red-700 font-bold"> Melee </span>
                  <span className="pr-3"> Lv. {melee} </span>
                </div>
            
                <div className="w-1/6">
                  <button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500" 
                    onClick={() => increaseStat(melee, setMelee)}> 
                    <span className="font-bold"> + </span> 
                  </button>
                </div>
              </div>

              <div className="px-4 py-2 flex items-center"> 
                <div className="flex-1 flex justify-between">
                  <span className="text-blue-700 font-bold"> Defense </span>
                  <span className="pr-3"> Lv. {defense} </span>
                </div>
            
                <div className="w-1/6">
                  <button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500" 
                    onClick={() => increaseStat(defense, setDefense)}> 
                    <span className="font-bold"> + </span> 
                  </button>
                </div>
              </div>

              <div className="px-4 py-2 flex items-center"> 
                <div className="flex-1 flex justify-between">
                  <span className="text-green-700 font-bold"> Sword </span>
                  <span className="pr-3"> Lv. {sword} </span>
                </div>
            
                <div className="w-1/6">
                  <button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500" 
                    onClick={() => increaseStat(sword, setSword)}> 
                    <span className="font-bold"> + </span> 
                  </button>
                </div>
              </div>

              <div className="px-4 py-2 flex items-center"> 
                <div className="flex-1 flex justify-between">
                  <span className="text-yellow-700 font-bold"> Gun </span>
                  <span className="pr-3"> Lv. {gun} </span>
                </div>
            
                <div className="w-1/6">
                  <button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500" 
                    onClick={() => increaseStat(gun, setGun)}> 
                    <span className="font-bold"> + </span> 
                  </button>
                </div>
              </div>

              <div className="px-4 py-2 flex items-center"> 
                <div className="flex-1 flex justify-between">
                  <span className="text-purple-700 font-bold"> Blox Fruit </span>
                  <span className="pr-3"> Lv. {blox} </span>
                </div>
            
                <div className="w-1/6">
                  <button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500" 
                    onClick={() => increaseStat(blox, setBlox)}> 
                    <span className="font-bold"> + </span> 
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 py-1 flex items-center justify-between bg-black text-2xl">
              <span className="text-white tracking-wide font-bold"> Available Points: {total} </span>

              <div>
                <button 
                  className="w-ful bg-yellow-400 hover:bg-yellow-500"
                  onClick={() => refundStat()}>
                  <span className="p-2 font-bold"> Refund </span> 
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
