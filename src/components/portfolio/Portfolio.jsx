import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [

    {
      id: 3,
      title: 'Photography-site',
      img: IMG2,
      description: 'Developed a visually appealing front page layout for a photography website, emphasizing user engagement and visual storytelling.Utilized modern CSS features and styling techniques.',
      
      link: '#',
      github: 'https://github.com/01prashu/Photographysite.git',
    },
    {
      id: 4,
      title: 'Vegatable-shop',
      img: IMG3,
      description:
        'Everaged JavaScript to enhance user interaction and functionality, including dynamic content loading, filtering options, and interactive elements.mplemented features such as product showcases, pricing information.',
     
      link: '#',
      github: 'https://github.com/01prashu/PBL-Project.git',
    },
    {
      id: 5,
      title: 'Calculator',
      img: IMG5,
      description:
        'Designed and implemented a user-friendly interface for a basic calculator application, featuring buttons for digits, operators, and clear/reset functionality.Utilized JavaScript to handle user input and perform arithmetic operations dynamically, updating the display with the result of each calculation.',
      
      link: 'https://01prashu.github.io/calculator/',
      github: 'https://github.com/01prashu/calculator.git',
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe',
      img: IMG6,
      description:
        'Implemented game logic and mechanics using JavaScript to handle player moves, determine game outcomes (win, lose, draw), and update the game board dynamically.Designed and styled the game interface using CSS to create an engaging and visually appealing layout.',
      
      link: 'https://01prashu.github.io/Tic-Tac-Toe/',
      github: 'https://github.com/01prashu/Tic-Tac-Toe.git',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
