import "./PersonalTraining.css"
import aboutPhoto from "./assets/gallery-1.jpg";

function PersonalTraining() {
    return(<div id="personalTraining" className="section blue">
        <div className="section-header">1:1 TRAINING</div>
        <div className="training-type">
            <div className="training-text">
                This section will talk about 1:1 training and the benefits etc...
            </div>
            <img src={aboutPhoto} className="training-photo" />
        </div>
    </div>)
}

export default PersonalTraining;