import React from 'react';
import './Skills.css';

export const SkillBar = ({skill="", level=0, color=""}) => (
    <figure className='skillBar'>
        <figcaption className='skillName'>{skill}</figcaption>
        <div className='progressBar'>
            <div className='progressLevel' 
            style={{width: `${level}%`, backgroundColor: color}}
            role='progressbar'
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
            title="Skill level"
            ></div> 
        </div>
    </figure>
);

const Skills = () => {
    return (
        <div className='skills'>
            <div>
                <h2>My Skills</h2>
            </div>
            <div className='skills-container'>
                <SkillBar skill="HTML" level={90} color="#ff3e00" />
                <SkillBar skill="CSS" level={80} color="#3a91c4" />
                <SkillBar skill="JavaScript" level={50} color="#d5bb23" />
                <SkillBar skill="Node.js" level={30} color="#68a063" />
                <SkillBar skill="Svelte" level={70} color="#ff3e00" />
                <SkillBar skill="React" level={50} color="#61dbfb" />
                <SkillBar skill="TypeScript" level={40} color="#007acc" />
            </div>
        </div>
    );
};

export default Skills;