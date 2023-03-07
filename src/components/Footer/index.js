import React from 'react';
// import {Link} from "react-router-dom"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="Footer">
       <ul class="nav col-md-6 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a  href="https://github.com/HowardLee2022"><BsGithub size={30} color={'#FFFFFF'}/></a></li>
                    <li class="ms-3"><a  href="https://www.linkedin.com/in/howard-lee-472148269/  /"><BsLinkedin size={30} color={'#FFFFFF'}/></a></li>
                </ul>
 
    </div>
  )
}

export default Footer