import React from 'react'
import { Link } from 'react-router-dom'
import {DiCoffeescript} from "react-icons/di"

export const Logo = () => {
  return (
    <Link className="logo" to="/" > <span className="logoText">MonFee</span> <DiCoffeescript size={55} color={'#d7ccc8'}></DiCoffeescript>  </Link>
  )
}


