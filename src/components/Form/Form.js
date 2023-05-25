import "./Form.css";

function handleOnSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data.checkboxInput);
}

export default function Form({ onAddActivity }) {
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <p className="formHeader">Add new Activity: </p>
      <div className="inputSection">
        <label htmlFor="activityInput" className="label">
          Name:&nbsp;
        </label>
        <input
          type="text"
          name="activityInput"
          className="activityInput"
          id="activityInput"
          placeholder="Type here"
        />
      </div>
      <div className="input">
        <label htmlFor="checkboxInput" className="label">
          <br />
          <br />
          Good-weather activity:
        </label>
        <input
          type="checkbox"
          name="checkboxInput"
          className="checkboxInput"
          id="checkboxInput"
        />
      </div>
      <br />
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
