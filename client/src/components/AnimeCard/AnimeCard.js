import React from 'react'
import { NavLink } from 'react-router-dom';
import './AnimeCard.css'

export default function AnimeCard({ shows }) {
  return (
    <div className='card-container'>
        {shows?.map((show) => {
            return (
                <div key={show.id} className="card">
                    <img src={show.image} className="show-picture" alt={show.name}/>
                    <h2 className='card-title'>{show.name}</h2>
              
                    <NavLink to={`/animes/${show.id}`} className="show-btn">Learn More</NavLink>
                </div>
            )
        })}
    </div>
  )
}