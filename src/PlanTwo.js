import "./Plan.css";

function PlanTwo() {
  return (
    <div id="plan_two">
      <div className="cell bold half">
        Resistance Training Programme for: <span>Jane Brown</span>
      </div>
      <div className="cell bold start">Start Date:</div>
      <div className="cell bold end">End Date:</div>
      <div className="cell bold half">
        Four-Week Goal(s):{" "}
        <span>
          Increase strength of lower body (squat), increase intensity of jog
        </span>
      </div>
      <div className="cell bold half">
        Programme Duration/Frequency: <span>2x week</span>
      </div>
      <div className="cell bold warmup">
        Warm Up: (General, specific, dynamic stretches etc)
        <br />
        <span>
          Bike - 5 minutes
          <br />
          Walking lunges x20, bodyweight squats x20, supine glute bridges x20
        </span>
      </div>
      <div className="cell bold">
        Duration: <br />
        <span>10 minutes</span>
      </div>
      <div className="cell bold">
        Intensity: <br />
        <span>4-5/10 RPE</span>
      </div>
      {[
        "Order",
        "Exercise",
        "Reps",
        "Sets",
        "Tempo #:#:#",
        "Rest (Sec)",
        "Load Wk 1",
        "Load Wk 2",
        "Load Wk 3",
        "Load Wk 4",
      ].map((msg) => {
        return <div className="cell bold">{msg}</div>;
      })}
      <div className="cell bold double">
        Notes: (e.g. w/up set, intensity, technique tips etc)
      </div>
      <div className="cell bold">1</div>
      <div className="cell">
        SS Goblet squat
        <br />
        Walking lunges
      </div>
      <div className="cell">
        12
        <br />
        12
      </div>
      {["3", "2:1:2", "60s", "50% 1RM", ""].map((msg) => {
        return <div className="cell">{msg}</div>;
      })}
      <div className="cell">
        {"\u2191"}reps
        <br />
        60%
        <br />
        1RM
      </div>
      <div className="cell">{"\u2191"}wt</div>
      <div className="cell double"></div>
      <div className="cell bold">2</div>
      {[
        "Leg press",
        "12",
        "3",
        "2:1:2",
        "30s",
        "50% 1RM",
        "",
        "\u2191reps 60% 1RM",
        "\u2191wt",
      ].map((msg) => {
        return <div className="cell">{msg}</div>;
      })}
      <div className="cell double"></div>
      <div className="cell bold">3</div>
      <div className="cell">
        Lat pull down
        <br />
        Push ups to failure
      </div>
      <div className="cell">
        12
        <br />-
      </div>
      {[
        "2",
        "2:1:2",
        "60s",
        "50% 1RM",
        "",
        "\u2191reps 60% 1RM",
        "\u2191wt",
      ].map((msg) => {
        return <div className="cell">{msg}</div>;
      })}
      <div className="cell double"></div>
      <div className="cell bold">4</div>
      {[
        "Plank hold",
        "45s",
        "2",
        "",
        "30s",
        "",
        "Add 10sec",
        "",
        "Add 10sec",
      ].map((msg) => {
        return <div className="cell">{msg}</div>;
      })}
      <div className="cell double"></div>
      <div className="cell bold">5</div>
      <div className="cell cardio">Cardio</div>
      <div className="cell double"></div>
      <div className="cell bold">6</div>
      <div className="cell">Treadmill (jog)</div>
      <div className="cell treadmill">
        25 minutes (Wk 1 + 2)
        <br />
        20 minutes (Wk 3 + 4)
      </div>
      {["6/10", "", "6/10", ""].map((msg) => {
        return <div className="cell">{msg}</div>;
      })}
      <div className="cell double"></div>
      <div className="cell bold warmup">
        Cool Down / Stretches:
        <br />
        <span>
          Treadmill walk - 5 minutes
          <br />
          Dynamic quad and hamstring stretches, Static Quad, hamstring, lat and
          glute stretch 30s hold
        </span>
      </div>
      <div className="cell bold">
        Duration:
        <br />
        <span>15 mins, 10 mins</span>
      </div>
      <div className="cell bold">
        Intensity:
        <br />
        <span>3-4/10 RPE</span>
      </div>
    </div>
  );
}

export default PlanTwo;
