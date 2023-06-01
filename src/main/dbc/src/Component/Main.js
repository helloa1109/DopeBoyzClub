import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/main.css';

function Main(props) {
    const slidesRef = useRef(null);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        toggleFullpageSliderMode();
        window.addEventListener('resize', handleWindowResize);

        handleKeyboardArrows();
        handleScrollThrottle();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function toggleFullpageSliderMode() {
        document.body.style.overflow = 'hidden';
    }

    function handleWindowResize() {
        setWindowHeight(window.innerHeight);
    }

    function handleKeyboardArrows() {
        document.addEventListener('keydown', (e) => {
            switch (e.which) {
                case 37: // left
                case 38: // up
                    slidesRef.current.slickPrev();
                    break;
                case 39: // right
                case 40: // down
                    slidesRef.current.slickNext();
                    break;
                default:
                    return;
            }
            e.preventDefault();
        });
    }

    function handleScrollThrottle() {
        let scrollDirection = '';
        let callbackTimeOut = 1200;

        window.addEventListener('wheel', (e) => {
            if (e.deltaY < 0) {
                scrollDirection = 'up';
            } else if (e.deltaY > 0) {
                scrollDirection = 'down';
            } else if (e.deltaX < 0) {
                scrollDirection = 'left';
            } else if (e.deltaX > 0) {
                scrollDirection = 'right';
            }
        });
        window.addEventListener('wheel', throttle(callback, callbackTimeOut));

        function throttle(fn, wait) {
            let time = Date.now();
            return function () {
                if (time + wait - Date.now() < 0) {
                    fn();
                    time = Date.now();
                }
            };
        }

        function callback() {
            if (scrollDirection === 'down' || scrollDirection === 'right') {
                slidesRef.current.slickNext();
            } else if (scrollDirection === 'up' || scrollDirection === 'left') {
                slidesRef.current.slickPrev();
            }
        }
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider className="fullpage-slider" ref={slidesRef} {...settings}>
            <div className="fullpage-slider__slide bg-1" style={{ height: windowHeight }}>
                <div className="centered-parent">
                    <div className="centered-child font-style-1"></div>
                    <div className="centered-child font-style-2">페이커수정본</div>
                </div>
            </div>

            <div className="fullpage-slider__slide bg-2" style={{ height: windowHeight }}>
                <div className="centered-parent">
                    <div className="centered-child font-style-1">2ㅇ</div>
                    <div className="centered-child font-style-2">찬민ㅇㅇㅇㅇ</div>
                </div>
            </div>

            <div className="fullpage-slider__slide bg-3" style={{ height: windowHeight }}>
                <div className="centered-parent">
                    <div className="centered-child font-style-1">2ㅇ</div>
                    <div className="centered-child font-style-2">동휘ㅇㅇㅇㅇ</div>
                </div>
            </div>

            <div className="fullpage-slider__slide bg-4" style={{ height: windowHeight }}>
                <div className="centered-parent">
                    <div className="centered-child font-style-1">성준ㄸㄷ<br /></div>
                </div>
            </div>
        </Slider>
    );
}

export default Main;
