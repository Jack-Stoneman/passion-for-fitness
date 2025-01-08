import "./Testimonial.css";

function Testimonial({ content }) {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <div className="testimonial-name">{content.name}</div>
        <div className="job-title">{content.job}</div>
      </div>
      <div className="testimonial-body">{content.body}</div>
    </div>
  );
}

export default Testimonial;
