import React from "react"
import "./links.scss"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="https://github.com/Devildk384" target="blank">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/durgeshkumar384/" target="blank">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/durgesh__384/" target="blank">
            <FaInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
