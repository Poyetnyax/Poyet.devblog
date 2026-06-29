import './Resume.css';
import Card from '../../../components/molecules/card/Card';
import { FaFile } from "react-icons/fa"
import ResButton from '../../../components/molecules/resbutton/ResButton';

const Resume = () => {
    return (
        <section id="resume" className="resume__container">
            <h1 className="resume__title">Resume</h1>
            <div className="resume__cards">
                <div className='education__cards'>
                    <h2 className='education__title'>Education</h2>
                    <Card period="March 2023 - June 2026" field="Bachelor of Science in Computer Science" place="University of Economic and Innovation" description="Majoring in computer science, 2nd year." />
                </div>
                <div className='experience__cards'>
                    <h2 className='experience__title'>Experience</h2>
                    <Card period="July 2023 - September 2024" field="Full Stack Developer" place="Robiki AI" description="Working as a full stack developer in the development team of Robiki AI, using technologies such as Svelte, Typescript, NodeJS, PostgreSQL, Postman, and Docker." />
                </div>
                <div className='experience__cards'>
                    <h2 className='experience__title'>Experience</h2>
                    <Card period="September 2025 - Present" field="Software QA Tester" place="Testronic" description="Working as part of the quality assurance team, I focus on ensuring software reliability, functionality, and basic security standards through structured manual testing, defect reporting, and close collaboration with development teams."/>
                </div>
            </div>
            <div className="myresume">
                <ResButton>Resume <FaFile /></ResButton>
            </div>

        </section>
    )
}

export default Resume