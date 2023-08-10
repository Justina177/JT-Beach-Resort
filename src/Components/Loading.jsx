import React from 'react'
import loaderImg from '../images/gif/loading-arrow.gif'
export default function Loading() {
  return (
    <div>
        <div className="wrapper">
          Room Data Loading
          <img src={loaderImg} alt="Loading..." />
      </div>
    </div>
  )
}
