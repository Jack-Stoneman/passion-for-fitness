import "./Process.css";
import { useState } from 'react';

function Process() {
    const [slide, setSlide] = useState(0);

    return(
        <div id="process">
            <div className="process-title">STEP BY STEP PROCESS</div>
            <div className="carousel">
                <div className="slides">
                    <div className="slide">Step 1</div>
                    <div className="slide">Step 2</div>
                    <div className="slide">Step 3</div>
                    <div className="slide">Step 4</div>
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