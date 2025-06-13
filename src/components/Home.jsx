
import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>well come to Home Page</h1>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Home
