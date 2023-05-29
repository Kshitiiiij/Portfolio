import React from 'react'
import './Portfolio.css'
import Works from './Works'
export default function Portfolio() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="section__subtitle">Most recent works</div>
      <Works />
    </section>
  )
}
