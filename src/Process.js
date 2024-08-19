import "./Process.css";
import { useState } from 'react';
import { useTransition } from 'react';

function Process() {
    const [slide, setSlide] = useState(3);
    const [isPending, startTransition] = useTransition();
    const slideCount = 4;

    const nextSlide = () => {
        startTransition(() => setSlide((slide+1) % slideCount))
    }

    function prevSlide() {
        let newSlide;
        if (slide) {
            newSlide = (slide-1) % slideCount;
        } else {
            newSlide = slideCount - 1;
        }
        startTransition(() => setSlide(newSlide))
    }

    return(
        <div id="process">
            <div className="process-title">STEP BY STEP PROCESS</div>
            <div className="carousel">
                <span className="arrow" onClick={nextSlide}/>
                <span className="arrow prev" onClick={prevSlide}/>
                <div className="slides">
                    <div className="slide" style={{left: slide * -100 + "%"}}>Step 1</div>
                    <div className="slide" style={{left: "calc(100% + " + slide * -100 + "%)"}}>Step 2</div>
                    <div className="slide" style={{left: "calc(200% + " + slide * -100 + "%)"}}>Step 3</div>
                    <div className="slide" style={{left: "calc(300% + " + slide * -100 + "%)"}}>Step 4</div>
                </div>
                <div className="dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
}

export default Process;