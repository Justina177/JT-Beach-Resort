import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icons:<FaCocktail />,
      title: "free cocktails",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A et ex fuga"
    },
    {
      icons:<FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A et ex fuga"
    },
    {
      icons:<FaShuttleVan />,
      title: "Free Shuttle",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A et ex fuga"
    },
    {
      icons:<FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A et ex fuga"
    }
  ];

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return <article key = {index} className="service">
            <span>{item.icons}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
      </div>
    </section>
  )
}
