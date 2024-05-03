import React, {Component} from 'react';
import Slider from "react-slick";
import "./NextLove.scss"
import monster from '../../../public/monster.png'
import man from '../../../public/man.png'


export default function NextLove() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    };
    return (
        <div className='Next'>
            <div className='Next__left'>
                <h2 className='Next__left__title'>What is NextLove®?</h2>
                <p className='Next__left__parag'>NextLove® is Norway's largest online community
                    for divorced single parents looking for new friends, an informal date or their
                    NextLove®. Dating with children after a life-changing divorce/separation is very
                    different from dating as a single person without children.</p>
                <p className='Next__left__parag2'>
                    It can be challenging to start dating again both emotionally and practically.
                    But we are here for you! We want to help you find exactly what you need and are
                    looking for right now.
                </p>
            </div>
            <div className='Next__right'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="Post">
                            <img src={monster} alt="monster"/>
                            <p className='Post__paragraph'>Charming Venusian is looking for a worthy opponent to play universal chess</p>
                        </div>
                        <div className="Post">
                            <img src={man} alt="man"/>
                            <p className='Post__paragraph'>The young chess player has already beaten everyone on planet Earth</p>

                        </div>
                        <div className="Post">
                        <img src={monster} alt="monster"/>
                            <p className='Post__paragraph'>Charming Venusian is looking for a worthy opponent to play universal chess</p>

                        </div>
                        <div className="Post">
                            <img src={man} alt="man"/>
                            <p className='Post__paragraph'>The young chess player has already beaten everyone on planet Earth p</p>

                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
