import "./FormStyle.css";

export default function Model({isVisible, errorMessge = null}) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1> the form Has been Submitted Successfully </h1> */}
          <h1 style={{color: errorMessge ? "red" : "green"}}>
            {errorMessge != null
              ? errorMessge
              : "the form Has been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  }
}
