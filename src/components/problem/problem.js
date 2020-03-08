import React from 'react';
import './problem.css';
import phone1 from '../images/Lingua phone 1.png';
import phone2 from '../images/Lingua phone 2.png';
import phone3 from '../images/Lingua phone 3.png';
import phone4 from '../images/Lingua phone 4.png';
import phone5 from '../images/Lingua phone 5.png';


const Problem = () =>{
    return (
        <section className="problem">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="process-subtitle">The problem
                        </div>
                        <p className="problem-text">After interviewing several language students, we came up with a
                            problem statement that encompasses the key pain point we aimed to solve with design
                            thinking.
                        </p>
                        <p className="speech">Language learners need a way to practise speaking because the goal of
                            learning a new language is to be able to have real-world conversations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="phones">
                <div className="phones-wrapper">
                    <img src={phone1} alt="logo" />
                    <img src={phone2} alt="logo" />
                    <img src={phone3} alt="logo" />
                    <img src={phone4} alt="logo" />
                    <img src={phone5} alt="logo" />
                </div>
            </div>
        </section>
    );

};

export default Problem;