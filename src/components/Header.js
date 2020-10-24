import React from 'react'

const robloxURL = 'https://www.roblox.com/home'

function Header (props) {
  return (
    <header className='py-4'>
      <span className='suez text-4xl md:text-6xl text-white block leading-none tracking-wide'>
        {props.title}
      </span>
      <span className='suez uppercase block text-2xl text-white'>
        for&nbsp;
        <a
          href={robloxURL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-red-700 hover:underline'
        >
          blox piece
        </a>
        &nbsp;(update 12)
        &nbsp; 🔥 ⚡️ ☄️
      </span>
    </header>
  )
}

export default Header
