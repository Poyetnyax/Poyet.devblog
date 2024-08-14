import './Resume.css';
import Card from '../../../components/molecules/card/Card';

const Resume = () => {
    return (
        <section id="resume" className="resume__container">
            <h1 className="resume__title">Resume</h1>
            <div className="resume__cards">
                <div className='education__cards'>
                    <h2 className='education__title'>Education</h2>
                    <Card period="2023 - Present" field="Bachelor of Science in Computer Science" place="University of Economic and Innovation" description="Majoring in computer science, 2nd year." />
                </div>
                <div className='experience__cards'>
                    <h2 className='experience__title'>Experience</h2>
                    <Card period="July 2023 - Present" field="Full Stack Developer" place="Robiki AI" description="Working as a full stack developer in the development team of Robiki AI, using technologies such as Svelte, Typescript, NodeJS, PostgreSQL, Postman, and Docker." />
                </div>
            </div>
        </section>
    )
}

export default Resume