import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import "../css/hyuk.css";

function Hyuk(props) {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const persist = 2500;
        const textIds = ["text_1", "text_2", "text_3"];

        const container = containerRef.current;

        /*
            dope boyz club 텍스트 변경 이벤트
         */
        const turnOnTransition = (el) => {
            el.classList.add("transitionOn");
            setTimeout(() => {
                el.classList.remove("transitionOn");
            }, persist);
        };

        const runTransition = (id) => {
            const el = document.getElementById(id);

            if (el) {
                setTimeout(() => {
                    turnOnTransition(el);

                    setInterval(() => {
                        turnOnTransition(el);
                    }, persist * textIds.length);
                }, 1);
            }
        };

        textIds.forEach((id, index) => {
            setTimeout(() => {
                runTransition(id);
            }, index * persist);
        });

        /*
            가로 스크롤 이벤트
         */

        gsap.to(container, {
            x: () => -(container.offsetWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "bottom top",
                invalidateOnRefresh: true,
                scrub: 1,
                end: () => "+=" + (container.offsetWidth - window.innerWidth)
            }
        });
    }, []);

    return (
        <div className={'h_main'}>
            <div id="intro">Intro</div>
            <div className="helper"></div>
            <div id="container" ref={containerRef}>

                <div className="module first">
                    <div className="page">
                        <div className="textContainer">
                            <span id="text_1" className="gradientText gradient_HTML">DOPE</span>
                            <span id="text_2" className="gradientText gradient_CSS">BOYZ</span>
                            <span id="text_3" className="gradientText gradient_Javascript">CLUB</span>
                        </div>
                    </div>
                </div>

                <div className="module second">
                    <div className={'second_main'}>
                        <div className={'text_container'}>
                            <span>안녕하세요</span>
                            <span>저희는 프론트엔드크루 입니다</span>
                            <span>방문해주셔서 감사합니다</span>
                        </div>

                        <div className={'border_div'}></div>

                        <div className={'git_link'}>
                            <a href="https://github.com/helloa1109/DopeBoyzClub" target="_blank"
                               rel="noopener noreferrer">
                                <div className="git_box">
                                    github
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={'profile_container'}>
                        dd
                    </div>

                </div>

                <div className="module purple">인트로 3</div>
                <div className="module orange">인트로 4</div>
                <div className="module blue">인트로 5</div>
                <div className="module red">인트로 6</div>
            </div>
        </div>
    );
}

export default Hyuk;
