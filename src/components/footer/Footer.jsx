import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/prashant-netke-b994a622b/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/01prashu" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/prashu__netke/" target="_blank" rel="noreferrer"><FaInstagram></FaInstagram></a>
      <a href="https://www.facebook.com/prashant.netke.56" target="_blank" rel="noreferrer"><FaFacebook></FaFacebook></a>
      </div>
      
    </footer>
  )
}

export default Footer
