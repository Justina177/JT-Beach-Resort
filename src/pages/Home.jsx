import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'

export default function Home() {
  return (
    <div>
      <Hero>
        <Banner title="luxurious rooms"  subtitle="deluxe rooms starting at $278">
          <Link to="/rooms" className="btn-primary">Our rooms</Link>
        </Banner>

      </Hero>
    </div>
  )
}
