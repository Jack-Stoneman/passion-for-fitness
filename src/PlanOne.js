import "./Plan.css";

function PlanOne() {
  return (
    <div id="plan">
      <div className="cell bold header">Passion for Fitness NZ</div>
      <div className="cell bold">Four-week goal</div>
      <div className="cell goal">
        Maintain running time at 20 minutes continuous running; moderate
        intensity training to gradually build lower body strength; increase
        caloric intake by 200 calories per day for the next 4 weeks
      </div>
      <div className="cell bold">Week</div>
      {[1, 2, 3, 4].map((num) => {
        return <div className="cell bold double centre">{num}</div>;
      })}
      <div className="cell bold">Targets</div>
      {[...Array(4)].map(() => {
        return (
          <div className="cell double">
            Run 20 mins (non-stop)
            <br />
            Calorie incr/day: 200 cals
          </div>
        );
      })}
      <div className="cell bold centre">Time</div>
      {[...Array(8)].map((e, i) => {
        return (
          <div className="cell bold">{i % 2 == 0 ? "Planned" : "Done"}</div>
        );
      })}
      <div className="cell bold">Mon</div>
      {[...Array(8)].map((e, i) => {
        return i % 2 == 0 ? (
          <div className="cell">
            Weights and Cardio
            <br />
            60 Mins
            <br />
            5/10 RPE
          </div>
        ) : (
          <div className="cell"></div>
        );
      })}
      <div className="cell bold">Tue</div>
      {[...Array(8)].map((e, i) => {
        return i % 2 == 0 ? (
          <div className="cell">
            Social Basketball
            <br />
            40 Mins
          </div>
        ) : (
          <div className="cell"></div>
        );
      })}
      <div className="cell bold">Wed</div>
      {[...Array(8)].map((e, i) => {
        return <div className="cell"></div>;
      })}
      <div className="cell bold">Thur</div>
      {[...Array(8)].map((e, i) => {
        return i % 2 == 0 ? (
          <div className="cell">
            Weights and Cardio
            <br />
            60 Mins
            <br />
            5/10 RPE
          </div>
        ) : (
          <div className="cell"></div>
        );
      })}
      <div className="cell bold">Fri</div>
      {[...Array(8)].map((e, i) => {
        return i % 2 == 0 ? (
          <div className="cell">
            Pump
            <br />
            60 Mins
            <br />
            7/10 RPE
          </div>
        ) : (
          <div className="cell"></div>
        );
      })}
      <div className="cell bold">Sat/Sun</div>
      {[...Array(8)].map((e, i) => {
        return i % 2 == 0 ? (
          <div className="cell">
            Social Basketball
            <br />
            40 Mins
          </div>
        ) : (
          <div className="cell"></div>
        );
      })}
    </div>
  );
}

export default PlanOne;
