// Correct import paths for react-icons
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaAngellist } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/prashant-netke-b994a622b/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/01prashu" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="#home" target="_blank" rel="noreferrer" ><FaAngellist /></a>
      <i class="cib-leetcode"></i>
    </div>
  )
}

export default HeaderSocials