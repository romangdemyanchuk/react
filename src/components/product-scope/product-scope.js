import React from 'react';
import './product-scope.css';
import Strip from "../strip";

const ProductScope = () =>{
    return (
        <section className="product-scope">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">Product</div>
                        <Strip/>
                        <p className="text">
                            LinguaLive foster students' practical application of language skills acquired in the
                            classroom by providing a platform for learners to engage in structered conversations with
                            native speakers. We collaborated with secondary language students and proffessional
                            linguists on this project after observing that language learners need a way to practice
                            speking because the goal of learning a new language is to have reak-world conversations.
                        </p>
                        <div className="title">
                            THE SCOPE
                        </div>
                        <Strip/>
                        <ul className="li-text">
                            <li>Create web responsive platform for students to practise speaking the language they are
                                learning with native speakers.
                            </li>
                            <li>Enable students to engage in conversation topics of personal interest.
                            </li>
                            <li>Give students a sense of progress throught structured dialogues that leverage knowledge
                                acquired in the classroom.
                            </li>
                            <li>Allow native speakers to provide constructive feedback to foster student's development.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default ProductScope;