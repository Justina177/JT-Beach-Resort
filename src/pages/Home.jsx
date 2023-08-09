import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Services from '../Components/Services'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms"  subtitle="deluxe rooms starting at $278">
          <Link to="/rooms" className="btn-primary">Our rooms</Link>
        </Banner>

      </Hero>
      <Services />
    </>
  )
}
