import React from 'react'
import Carousell from './Carousel/Carousell'
import Footter from './Footer/Footter'
import Members from './Members/Members'
import NavBar from './NavBar/NavBar'
import Project from './Project/Project'

const Casa = () => {
  return (
    <div>
        <NavBar/>
        <Carousell/>
        <Project/>
        <Members/>
        <Footter/>
    </div>
  )
}

export default Casa