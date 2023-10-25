import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython, faJava, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Skills = () => {
    const skills = [
    { name: 'C++', icon: faCodepen, level: 90 },
    { name: 'Python', icon: faPython, level: 95 },
    { name: 'HTML', icon: faHtml5, level: 92 },
    { name: 'CSS', icon: faCss3, level: 92 },
    { name: 'JavaScript', icon: faJs, level: 70 },
    { name: 'React', icon: faReact, level: 60 },
    { name: 'Node.js', icon: faNodeJs, level: 50 },
    { name: 'Java', icon: faJava, level: 70 },
    
  ];

  return (
    <div className="skills-section">
      <h2>SKILLS</h2>
      {skills.map((skill) => (
        <div className="skill-item" key={skill.name}>
          <div className="skill-icon">
            <FontAwesomeIcon icon={skill.icon} color="black" />
          </div>
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">
            <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Skills;