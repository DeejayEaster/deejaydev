import React from "react";

const AboutSkills = props => {
    return (
        <>
            <div className='skill-item'>
                <h3>HTML5</h3>
                <div className='progress-bar'>
                    <span className="filler html"></span>
                </div>
            </div>

            <div className='skill-item'>
                <h3>CSS/SASS</h3>

                <div className='progress-bar'>
                    <span className="filler css"></span>
                </div>
            </div>

            <div className='skill-item'>
                <h3>JAVASCRIPT</h3>
                <div className='progress-bar'>
                    <span className="filler javascript"></span>
                </div>
            </div>

            <div className='skill-item'>
                <h3>REACT/REDUX</h3>
                <div className='progress-bar'>

                    <span className="filler react"></span>
                </div>
            </div>

            <div className='skill-item'>
                <h3>JAVA/SPRING</h3>
                <div className='progress-bar'>
                    <span className="filler java"></span>
                </div>
            </div>

            <div className='skill-item'>
                <h3>NODE/EXPRESS</h3>
                <div className='progress-bar'>
                    <span className="filler node"></span>
                </div>
            </div>

        </>
    );
};

export default AboutSkills;