import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-scroll'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-title'>
        Hi, my name is Jorge
      </h1>
      <p className='header-info'>
        I'm a passionate Frontend Developer 🤘
      </p>
      <Button
        className='header-button'
        variant='container'
      >
        <Link
          to="about"
          spy={true}
          smooth={true}>
          Let me show you! 🚀
        </Link>
      </Button>
    </header>
  )
}

export default Header
