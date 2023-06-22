import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Album from "./album";

function Main(props) {
    const slidesRef = useRef(null);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [currentPage, setCurrentPage] = useState('main');

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowLeft': // 왼쪽
                setCurrentPage('left');
                break;
            case 'ArrowUp': // 위
                setCurrentPage('up');
                break;
            case 'ArrowRight': // 오른쪽
                setCurrentPage('right');
                break;
            case 'ArrowDown': // 아래
                setCurrentPage('down');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown); // 이벤트 리스너 추가

        return () => {
            document.removeEventListener('keydown', handleKeyDown); // 이벤트 리스너 제거
        };
    }, []);

    useEffect(() => {
        slidesRef.current.slickGoTo(0); // 슬라이더를 첫 번째 슬라이드로 이동
    }, [currentPage]);


    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
    };

    const getPageComponent = () => {
        switch (currentPage) {
            case 'main':
                return (
                    <div className="fullpage-slider__slide bg-1" style={{ height: windowHeight }}>
                        <div className="centered-parent">
                            <div className="centered-child font-style-1">메인페이지</div>
                            <Album/>
                        </div>
                    </div>
                );
            case 'up':
                return (
                    <div className="fullpage-slider__slide bg-2" style={{ height: windowHeight }}>
                        <div className="centered-parent">
                            <div className="centered-child font-style-1">위</div>

                        </div>
                    </div>
                );
            case 'left':
                return (
                    <div className="fullpage-slider__slide bg-3" style={{ height: windowHeight }}>
                        <div className="centered-parent">
                            <div className="centered-child font-style-1">왼쪽페이지</div>
                        </div>
                    </div>
                );
            case 'right':
                return (
                    <div className="fullpage-slider__slide bg-4" style={{ height: windowHeight }}>
                        <div className="centered-parent">
                            <div className="centered-child font-style-1">오른쪽페이지</div>
                        </div>
                    </div>
                );
            case 'down':
                return (
                    // Add your own DownPage component here
                    <div className="fullpage-slider__slide bg-5" style={{ height: windowHeight }}>
                        <div className="centered-parent">
                            <div className="centered-child font-style-1"></div>

                        </div>
                    </div>
                );
            default:
                return (
                    <div className="fullpage-slider__slide bg-1" style={{ height: windowHeight }}>
                        <div className="centered-parent">
                            <div className="centered-child font-style-1">Modified Content 1</div>
                            <div className="centered-child font-style-2">Some text</div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <Slider className="fullpage-slider" ref={slidesRef} {...settings}>
            {getPageComponent()}
        </Slider>
    );
}

export default Main;