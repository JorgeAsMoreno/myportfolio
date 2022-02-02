import React from 'react'
import { Button } from '@mui/material'
import './Card.scss'

const Card = ({
  alt,
  css,
  imageSource,
  javascript,
  html,
  material,
  react,
  reverseColumn,
  title,
  typescript,
  jest,
  scss,
  vtex,
  tachyons,
  live,
  code
}) => {
  return (
    <div className="project-container">
      <div className={`project-container_content ${reverseColumn && 'project-container_content__reverse'}`}>
        <div className="project-container_image">
          <img
            alt={alt}
            src={imageSource}
          />
        </div>
        <div className="project-container_content__info">
          <h2>{title}</h2>
          <ul>
            <li>{html}</li>
            <li>{css}</li>
            <li>{scss}</li>
            <li>{javascript}</li>
            {react !== undefined ? <li>{react}</li> : ''}
            {material !== undefined ? <li>{material}</li> : ''}
            {typescript !== undefined ? <li>{typescript}</li> : ''}
            {jest !== undefined ? <li>{jest}</li> : ''}
            {vtex !== undefined ? <li>{vtex}</li> : ''}
            {tachyons !== undefined ? <li>{tachyons}</li> : ''}
          </ul>
          <div className='project-buttons'>
            {
              live !== undefined ? <Button className='btn-live' variant='outlined'><a href={live} target='_blank' rel='noreferrer'>Check out live</a></Button> : ''
            }
            {
              code !== undefined ? <Button className='btn-code' variant='outlined'><a href={code} target='_blank' rel='noreferrer'>Check the code</a></Button> : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
