import { Button } from "@mui/material";
import React from "react";
import Image from "../Skills/Image";
import './Social.scss';

const Social = () => {
  return (
    <div className="social">
      <h2>Get In Touch</h2>
      <div className="social-container">
        <div>    
          <a      
            href="https://www.linkedin.com/in/jorge-moreno-53a413189/"
            target="_blank"
            rel="noreferrer"
            >
            <Image
              alt="Linkedln"
              source="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              />
          </a>
          <a
            href="https://github.com/jorgeasmoreno"
            target="_blank"
            rel="noreferrer"
            >
            <Image
              alt="Github"
              source="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
          </a>
        </div>
        <div className="social-email">
          <Button>
            <a href="mailto:solisamo6@gmail.com">Send me a message</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Social
