import React, {Component} from 'react';
import './problem.css';
import phone1 from '../images/Lingua phone 1.png';
import phone2 from '../images/Lingua phone 2.png';
import phone3 from '../images/Lingua phone 3.png';
import phone4 from '../images/Lingua phone 4.png';
import phone5 from '../images/Lingua phone 5.png';
// import sl1 from "../images/Lingua desktop 2.png";
// import Slide from "../slider/slide";
// import Slider from "react-slick";
import Phones from "./phones/phone";


export default class Problem extends Component{
    render() {
        const phonesImg = [
            {src: phone1, alt: 'phone1'},
            {src: phone2, alt: 'phone2'},
            {src: phone3, alt: 'phone3'},
            {src: phone4, alt: 'phone4'},
            {src: phone5, alt: 'phone5'}
        ]
        const phones = phonesImg.map((item) => {
            return <Phones itemSrc={item.src} alt={item.alt}/>
        });
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
                            {phones}
                    </div>
                </div>
            </section>





    );
    }
};