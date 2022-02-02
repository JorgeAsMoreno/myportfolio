import React from 'react'
import Image from './Image'
import './Skills.scss'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-image'>
        <img
          alt='skills'
          src='https://klmarketingdigitalcr.com/wp-content/uploads/2021/05/Vector-Smart-Object.png'
        />
      </div>
      <div className='skills-info'>
        <div className='skills-info_container'>
          <div>
            <h2>Main Skills</h2>
            <p>
              Currently I am highly focused on Front-End Development.
              To create fully responsive websites and applications
              I use HTML5, CSS3, CSS Flexbox, Sass preprocessor
            </p>
          </div>
          <div className='skills-list'>
            <Image
              alt='HTML'
              source='https://cdn-icons-png.flaticon.com/512/732/732212.png'
            />
            <Image
              alt='CSS'
              source='https://images.squarespace-cdn.com/content/v1/5d92ada3ce33b921593d604c/1592948462336-E21Q5BTP77NY23POT6XJ/css.png'
            />
            <Image
              alt='JS'
              source='https://www.seekpng.com/png/full/80-803501_javascript-logo-logo-de-java-script-png.png'
            />
            <Image
              alt='SCSS'
              source='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/245px-Sass_Logo_Color.svg.png'
            />
            <Image
              alt='React'
              source='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            />
            <Image
              alt='Git'
              source='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
