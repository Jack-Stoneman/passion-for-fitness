import './Welcome.css'


let paragraph1 = `I’m 110% passionate about helping my clients achieve their goals and feeling more fit and
        comfortable in their own bodies. Whether your goal is weight loss, muscle growth, strength,
        endurance or a specific sporting challenge you’re looking to complete with sustainable
        results, I can help turn your goals into reality.`,
    paragraph2 = `I’ll spend time with you to understand your fitness goals, preferences and timelines before
        creating a customised exercise plan and program that’ll be fun, energising, results-focused
        and keep you accountable. My training programs have a strong focus on performing
        exercises with the correct form and technique to optimise muscle growth and minimise the
        risk of injuries.`,
    paragraph3 = `I believe in exercise habits that last – I’m committed to seeing you achieve your short and
        long-term fitness goals and will provide you the right level of support and motivation,
        regular check-ins, progress reviews and make the necessary changes to your program to
        ensure you’ll sustain these changes over time.`,
    paragraph4 = `More people are now seeking the expertise of personal trainers because it keeps them
        accountable and is an effective method for changing attitudes for good health and weight
        management. Exercise has been proven to combat stress and improve your mood. As a
        qualified personal trainer, you’ll get effective and safe programs from me to support your
        individual goals, feel less stressed and more relaxed.`;

function Welcome() {
    return (
        <div id="welcome">
            <div className="logo-container">
                <span className="logo"/>
            </div>
            <div className="welcome-title">
                WELCOME TO PASSION FOR FITNESS NZ!
            </div>
            <div className="introduction-grid">
                <div className="grid-wrapper">
                    <div>
                        {/* <span className="goal"/> */}
                        {paragraph1}
                    </div>
                    <div>
                        {/* <span className="plan"/> */}
                        <span className="separator"/>
                        {paragraph2}
                    </div>
                </div>
                <div className="grid-wrapper">
                    <div>
                        {/* <span className="hourglass"/> */}
                        <span className="separator"/>
                        {paragraph3}
                    </div>
                    <div>
                        {/* <span className="health"/> */}
                        <span className="separator"/>
                        {paragraph4}
                    </div>
                </div>
            </div>
            {/* <InlineWidget url="https://calendly.com/jestoneman"
                pageSettings={{
                    backgroundColor: '#e8e8e8'
                }}/> */}
        </div>
    )
}

export default Welcome;