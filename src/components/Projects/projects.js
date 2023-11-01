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
            <button className="workBtn">Voir Plus</button>
            <img src={ cards } alt="" className="projectsImg"/>
            <button className="workBtn">Voir Plus</button>
            <img src={ game } alt="" className="projectsImg"/>
            <button className="workBtn">Voir Plus</button>
            <img src={ cpro } alt="" className="projectsImg"/>
            <button className="workBtn">Voir Plus</button>

        </div>
    </section>
  
  )
}

export default Projects;