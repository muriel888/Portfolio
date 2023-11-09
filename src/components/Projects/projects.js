import React from 'react';
import './projects.css';
import weather from '../../pics/weather.png';
import cards from '../../pics/cards.png';
import game from '../../pics/game.png';
import cpro from '../../pics/cpro.png';


const Projects = () => {
  return (
    <section id='projects'>
        <h3 className="projectsTitle">Mes Projects</h3>
        <div className="projectsImgs">
            <img src={ weather } alt="" className="projectsImg"/>
            <a href='https://muriel888.github.io/weather-app/'><button className="workBtn">Weather app</button></a>
            <img src={ cards } alt="" className="projectsImg"/>
            <a href='https://muriel888.github.io/memory-game/'><button className="workBtn">Card game</button></a>
            <img src={ game } alt="" className="projectsImg"/>
            <a href='https://github.com/muriel888'><button className="workBtn">Voir Plus</button></a>
            <img src={ cpro } alt="" className="projectsImg"/>
            <a href='https://github.com/muriel888'><button className="workBtn">Voir Plus</button></a>

           

        </div>
    </section>
  
  )
}

export default Projects;