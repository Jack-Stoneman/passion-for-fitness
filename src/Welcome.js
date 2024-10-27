import "./Welcome.css";
import welcomeVideo from "./assets/master.mp4";

function Welcome() {
  return (
    <div id="welcome">
      <div className="logo-container">
        <span className="logo" />
      </div>
      <div className="content-wrapper">
        <div className="welcome-text-wrapper">
          <div className="welcome-title">Your Journey, My Passion</div>
          <div className="welcome-message">
            Welcome to passionforfitness.net <br />
            <br />
            If you’re serious about achieving your health and fitness goals and
            looking for structured training programs, exercise selection,
            nutritional advice and motivation for a stronger, fitter and
            healthier you, come work with me. <br />
            <br />
            Whether you’re a beginner, a habitual exerciser wanting better
            results or looking to train again after a long layoff or injuries, I
            can help you train hard, have fun, keep you safe and motivate you to
            achieve the results you’re looking for. My training programs have a
            strong focus on performing exercises with the correct form and
            technique to optimise muscle growth and minimise the risk of
            injuries.
          </div>
        </div>
        <video className="welcome-video" autoplay loop muted>
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
