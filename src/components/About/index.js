import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <div className='about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']} idx={15} />
                </h1>
                <p>I am a sophomore at Michigan State University majoring in Computer Science.</p>
                <p>Aspiring Computer Science Engineer</p>
                <p>Been working on both frontend and backend skills lately.</p>
            </div>
        </div>
    )
};


export default About;