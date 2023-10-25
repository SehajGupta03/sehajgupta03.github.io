import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <h1>CONTACT ME!</h1>
                <a href="mailto:guptaseh@msu.edu">Email me!</a>
                <a target='_blank' rel='boreferrer' href='https://www.linkedin.com/in/sehaj-gupta/'>
                    <FontAwesomeIcon icon={faLinkedin} color='gray' />
                </a>
                <a target='_blank' rel='boreferrer' href='https://github.com/SehajGupta03'>
                    <FontAwesomeIcon icon={faGithub} color='gray' />
                </a>

            </div>
        </>
    )
};


export default Contact;