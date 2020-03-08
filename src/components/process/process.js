import React from 'react';
import './process.css';

const AppHeader = () =>{
    return (
        <section className="process">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">Design Process</div>
                        <div className="strip"/>
                        <div>
                            <div className="process-subtitle">Research
                            </div>
                            <p className="text">
                                This process includes user interviews, competitive analysis, research synthesis,
                                personal development, user stories and determination of the information architecture for
                                the product. Below is a quote from one of our user interviews that encompasses a common
                                sentiment of our users
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="author">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="author-text">
                                "The goal of learning a new language is to be able to have real-world conversation."
                            </div>
                            <div className="author-info">
                                <span>Yulia</span> Russian Language Student
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default AppHeader;