import React, {Component} from 'react';
import './cross.css';
import img1 from '../images/Lingua web 1.png'
import img2 from '../images/Lingua web 2.png'
import img5 from '../images/Lingua web 5.png'
import img6 from '../images/Lingua web 6.png'
import ImageFooter1 from "../cross/image-footer-1";
import ImageFooter2 from "../cross/image-footer-2";

export default class Cross extends Component {
    render() {
        const images1 = [
            {src: img1, alt: 'img1'},
            {src: img2, alt: 'img2'},
            {src: img5, alt: 'img3'},
        ]
        const ImgFooter1 = images1.map((item) => {
            return <ImageFooter1 itemSrc={item.src} alt={item.alt}/>
        });
        const images2 = [
            {src: img6, alt: 'img4'},
            {src: img1, alt: 'img5'},
            // {src: img2, alt: 'img6'},
            // {src: img1, alt: 'img7'}
        ]
        const ImgFooter2 = images2.map((item) => {
            return <ImageFooter2 itemSrc={item.src} alt={item.alt}/>
        });
        return (
            <section className="cross">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cross-subtitle">Cross platform experience
                            </div>
                            <p className="text">In order to make the on-demand learning experience more accessible, we
                                deemed web responsivity to be crusial to our users. This allows students to easily have
                                conversations at any time or on the go.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="image-footer">
                    <div className="image-footer-1">
                        {ImgFooter1}
                    </div>
                    <div className="image-footer-2">
                        <img className="img-first" src={img5} alt="logo" />
                        {ImgFooter2}
                        <img className="img-last" src={img2} alt="logo" />
                    </div>
                </div>
            </section>
        );
    }
};