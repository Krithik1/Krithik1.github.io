import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import './contact.css'

const contact = () => {
  return (
    <div id='contact'>
      <ul>
        <li><a href="https://github.com/Krithik1"><FaGithub/></a></li>
        <li><a href="https://www.linkedin.com/in/krithik-sehgal-8411731bb/"><FaLinkedin/></a></li>
        <li><a href="mailto: krithiksehgal100403@gmail.com"><HiOutlineMail/></a></li>
      </ul>
    </div>
  )
}

export default contact