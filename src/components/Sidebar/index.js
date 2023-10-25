import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo" />
            <h4 className='sub-logo'>Sehaj</h4>
        </Link>
        <nav>
            <NavLink exact="true" activeclassame="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassame="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassame="active" className='skills-link' to='/skills'>
                <FontAwesomeIcon icon={faBrain} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassame="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='boreferrer' href='https://www.linkedin.com/in/sehaj-gupta/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='boreferrer' href='https://github.com/SehajGupta03'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar