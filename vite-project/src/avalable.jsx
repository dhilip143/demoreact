import "./index.css"
function Avalable(props) {

  return (
    <>
      <div className="hiv">
        <div className="course-card">
          <div className="card-image">
            <img src={props.image} alt="Course" />
          </div>
          <div className="card-content">
            <h3>{props.han}</h3>
            <p>{props.hin}</p>
            <button>Enroll Now</button>
          </div>
        </div>
      </div>

    </>
  );
}
export default Avalable