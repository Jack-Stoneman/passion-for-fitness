import "./Calendar.css";
import { InlineWidget } from "react-calendly";

function Calendar() {
    let year = new Date().year
    return (
        <div id="calendar">
            <div className="calendar-content-wrapper">
                <div className="calendar-paragraph">
                    <div className="calendar-title">BOOK A CALL</div>
                    <div className="calendar-text">
                        Feel free to book a call and we can discuss the next steps in
                        your fitness journey.
                    </div>
                </div>
                <div className="calendly-wrapper">
                    <InlineWidget url="https://calendly.com/jestoneman/30min"
                    pageSettings={{
                        backgroundColor: '#002e57',
                        textColor: '#ffffff'
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Calendar;