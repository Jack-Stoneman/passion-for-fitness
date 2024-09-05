import "./OnlineTraining.css"
import aboutPhoto from "./assets/gallery-1.jpg";

function OnlineTraining() {
    return(<div id="onlineTraining" className="section">
        <div className="section-header">ONLINE TRAINING</div>
        <div className="training-type">
            <img src={aboutPhoto} className="training-photo" />
            <div className="training-text">
                This section will talk about online training and the benefits etc...
            </div>
        </div>
    </div>)
}

export default OnlineTraining;