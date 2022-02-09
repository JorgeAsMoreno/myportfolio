import React from "react";
import Card from "./Card";
import Netflix from './img/netflix.JPG'
import Airbnb from './img/airbnb.JPG'
import Github from './img/github.JPG'
import Rick from './img/rick.JPG'
import Task from './img/task.JPG'
import './Projects.scss';

const Projects = () => {
  return (
    <div className="project">
      <div className="project-title">
        <h2>My Projects</h2>
        <p>
          Here is a short
          list of my projects!
        </p>
      </div>
      <Card
        alt="netflix"
        css="CSS3"
        imageSource={Netflix}
        javascript="JavaScript"
        html="HTML5"
        material="Material UI"
        react="React"
        title="Netflix Clone"
        scss="SCSS"
        live="https://clone-netflix-teal.vercel.app/"
        code="https://github.com/JorgeAsMoreno/Netflix-Clone"
      />
      <Card
        reverseColumn="reverse"
        alt="Aribnb"
        css="CSS3"
        imageSource={Airbnb}
        javascript="JavaScript"
        html="HTML5"
        material="Material UI"
        react="React"
        title="Airbnb Clone"
        scss="SCSS"
        live="https://clone-airbnb-vkg4.vercel.app/"
        code="https://github.com/JorgeAsMoreno/Airbnb"
      />
      <Card
        alt="Task list"
        css="CSS3"
        imageSource={Task}
        javascript="JavaScript"
        html="HTML5"
        title="Task List"
        scss="SCSS"
        react="React"
        typescript="typescript"
        live="https://takslist.vercel.app/"
        code="https://github.com/JorgeAsMoreno/Task-List"
      />
      <Card
        reverseColumn="reverse"
        alt="Github"
        css="CSS3"
        imageSource={Github}
        javascript="JavaScript"
        html="HTML5"
        react="React"
        title="Github Page"
        typescript="Typescript"
        jest="Jest"
        scss="SCSS"
        code="https://github.com/JorgeAsMoreno/technical-challenge/tree/development/frontend"
        />
        <Card
          alt="Rick and Morty"
          css="CSS3"
          imageSource={Rick}
          javascript="JavaScript"
          html="HTML5"
          title="Rick and Morty"
          scss="SCSS"
          react="React"
          code="https://github.com/JorgeAsMoreno/RickAndMorty"
        />
    </div>
  )
}

export default Projects
