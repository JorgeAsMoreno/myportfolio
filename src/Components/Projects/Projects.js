import React from "react";
import Card from "./Card";
import Netflix from './img/netflix.JPG'
import Airbnb from './img/airbnb.JPG'
import Github from './img/github.JPG'
import Sally from './img/sally.JPG'
import Rick from './img/rick.JPG'
import Elektra from './img/elektra.JPG'
import Famsa from './img/famsa.JPG'
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
          reverseColumn="reverse"
          alt="La Torre"
          css="CSS3"
          imageSource={Rick}
          javascript="JavaScript"
          html="HTML5"
          title="Rick and Morty"
          scss="SCSS"
          react="React"
          code="https://github.com/JorgeAsMoreno/RickAndMorty"
        />
      <Card
        alt="Sally Beauty"
        css="CSS3"
        imageSource={Sally}
        javascript="JavaScript"
        html="HTML5"
        title="Sally Beauty"
        scss="SCSS"
        vtex="VTEX"
        tachyons="Tachyons"
        live="https://www.sallymexico.com/"
      />
      <Card
        reverseColumn="reverse"
        alt="Famsa"
        css="CSS3"
        imageSource={Famsa}
        javascript="JavaScript"
        html="HTML5"
        title="Famsa"
        react="React"
        scss="SCSS"
        vtex="VTEX"
        tachyons="Tachyons"
        live="https://www.famsa.com/"
      />
      <Card
        alt="Elektra"
        css="CSS3"
        imageSource={Elektra}
        javascript="JavaScript"
        html="HTML5"
        title="Elektra"
        react="React"
        scss="SCSS"
        vtex="VTEX"
        tachyons="Tachyons"
        live="https://www.elektra.com.mx/"
      />
    </div>
  )
}

export default Projects
