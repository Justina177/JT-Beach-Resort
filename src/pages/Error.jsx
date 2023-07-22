import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import Hero from '../Components/Hero';


export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">return home</Link>
      </Banner>
    </Hero>
  )
}
