import React from 'react';
import './work.css';
import javascript from '../../pics/javascript.png';
import react from '../../pics/react.png';
import cpp from '../../pics/cpp.png';
import java from '../../pics/java.png';
import csharp from '../../pics/csharp.png';
import html from '../../pics/html.png';
import css from '../../pics/css.png';
import php from '../../pics/php.png';
import eclipse from '../../pics/eclipse.png';
import node from '../../pics/node.png';
import sql from '../../pics/sql.png';
import mysql from '../../pics/mysql.png';
import vsc from '../../pics/vsc.png';
import vs from '../../pics/vs.png';
import bitbucket from '../../pics/bitbucket.png';
import github from '../../pics/github.png';
import gitbash from '../../pics/gitbash.png';
import mycv from '../../pics/Muriel-TIENDREBEOGO.pdf';


function Works() {
  return (
   <section id='works'>
      <h2 className="worksTitle"> Mes compétences</h2>
<span className="worksDesc">Mon bagage académique m'a permis de développer des compétences pointues en programmation. J'ai également acquis une expérience pratique dans divers environnements de développement. Ma capacité à assimiler rapidement de nouvelles technologies et langages me permet de m'adapter aux besoins changeants de votre entreprise.</span>

      <div className="worksImgs">
        <img src={ javascript } alt="" className="worksImg"/>
        <img src={ html } alt="" className="worksImg"/>
        <img src={ css } alt="" className="worksImg"/>
        <img src={ react } alt="" className="worksImg"/>
        <img src={ java }alt="" className="worksImg"/>
        <img src={ php } alt="" className="worksImg"/>
        <img src={ cpp } alt="" className="worksImg"/>
        <img src={ csharp } alt="" className="worksImg"/>
        <img src={ eclipse } alt="" className="worksImg"/>
        <img src={ node } alt="" className="worksImg"/>
        <img src={ sql } alt="" className="worksImg"/>
        <img src={ mysql } alt="" className="worksImg"/>
        <img src={ vsc } alt="" className="worksImg"/>
        <img src={ vs } alt="" className="worksImg"/>
        <img src={ bitbucket } alt="" className="worksImg"/>
        <img src={ github } alt="" className="worksImg"/>
        <img src={ gitbash } alt="" className="worksImg"/>
       </div>

       <a href={mycv} download><button className="workBtn">Voir Plus</button></a>

   </section>
  )
}

export default Works;