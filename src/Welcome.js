import "./Welcome.css";
import welcomeVideo from "./assets/master.mp4";

function Welcome() {
  return (
    <div id="welcome">
      <div className="content-wrapper">
        <div className="welcome-text-wrapper">
          <div className="welcome-header">
            <span className="logo" />
            <div className="welcome-header-text">
              <div className="welcome-title">Your Journey, My Passion</div>
              <div className="welcome-subtitle">
                Welcome to passionforfitness.net
              </div>
            </div>
          </div>
          <div className="welcome-message">
            If you’re serious about achieving your health and fitness goals and
            are looking for a trusted, results-driven coach to help you with
            structured training programs, exercise selection, nutritional advice
            and motivation for a stronger, fitter and healthier you, then come
            work with me. <br />
            <br />
            Whether you’re a beginner, a habitual exerciser wanting better
            results or looking to train again after a long layoff or injury, I
            can help you make steady progress and prescribe training programs
            that are fun and energising, keep you safe, and motivate you to
            achieve the results you're looking for. My sessions have a strong
            focus on performing exercises with the correct form and technique to
            optimise muscle growth and minimise the risk of injuries.
          </div>
        </div>
        <video className="welcome-video" autoPlay muted loop controls>
          <source src={welcomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <InlineWidget url="https://calendly.com/jestoneman"
                pageSettings={{
                    backgroundColor: '#e8e8e8'
                }}/> */}
    </div>
  );
}

export default Welcome;
